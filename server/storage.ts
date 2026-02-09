import { type User, type InsertUser, type Lead, type InsertLead } from "../shared/schema";
import { supabaseAdmin } from "./supabase-admin";

// Storage interface - keeping same API for compatibility
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
  deleteLead(id: string): Promise<void>;
}

// Supabase-backed storage implementation
export class SupabaseStorage implements IStorage {
  // User methods (keeping existing functionality)
  async getUser(id: string): Promise<User | undefined> {
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return undefined;
    return data as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) return undefined;
    return data as User;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { data, error } = await supabaseAdmin
      .from("users")
      .insert(insertUser)
      .select()
      .single();

    if (error) throw new Error(`Failed to create user: ${error.message}`);
    return data as User;
  }

  // Lead methods - production waitlist
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert({ email: insertLead.email, name: insertLead.name })
      .select()
      .single();

    if (error) {
      // Handle duplicate email gracefully
      if (error.code === "23505") {
        throw new Error("This email is already on the waitlist");
      }
      throw new Error(`Failed to add to waitlist: ${error.message}`);
    }

    return data as Lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error(`Failed to fetch leads: ${error.message}`);
    return data as Lead[];
  }

  async deleteLead(id: string): Promise<void> {
    const { error } = await supabaseAdmin
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) throw new Error(`Failed to delete lead: ${error.message}`);
  }
}

export const storage = new SupabaseStorage();


