import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/api";

interface Lead {
    id: string;
    email: string;
    name: string | null;
    created_at: string;
}

export default function AdminWaitlist() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const { toast } = useToast();

    // Check if already authenticated
    useEffect(() => {
        const savedPassword = localStorage.getItem("admin_password");
        if (savedPassword) {
            setAuthenticated(true);
        }
    }, []);

    // Fetch all leads
    const fetchLeads = async () => {
        try {
            setLoading(true);
            const res = await apiRequest("GET", "/api/admin/leads", undefined, {
                requiresAuth: true,
            });
            const data = await res.json();
            setLeads(data);
        } catch (error: any) {
            if (error.message.includes("Unauthorized")) {
                setAuthenticated(false);
                localStorage.removeItem("admin_password");
            }
            toast({
                title: "Error",
                description: error.message || "Failed to load waitlist",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    // Delete lead
    const handleDelete = async (id: string) => {
        if (!confirm("Remove this email from the waitlist?")) return;

        try {
            setDeleting(id);
            await apiRequest("DELETE", `/api/admin/leads/${id}`, undefined, {
                requiresAuth: true,
            });
            setLeads(leads.filter((lead) => lead.id !== id));
            toast({
                title: "Deleted",
                description: "Email removed from waitlist",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete email",
                variant: "destructive",
            });
        } finally {
            setDeleting(null);
        }
    };

    // Export to CSV
    const handleExport = () => {
        const csv = [
            ["Email", "Name", "Joined At"],
            ...leads.map((lead) => [
                lead.email,
                lead.name || "",
                new Date(lead.created_at).toLocaleString(),
            ]),
        ]
            .map((row) => row.map((cell) => `"${cell}"`).join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `waitlist-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    // Handle login
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("admin_password", password);
        setAuthenticated(true);
    };

    useEffect(() => {
        if (authenticated) {
            fetchLeads();
        }
    }, [authenticated]);

    // Show login form if not authenticated
    if (!authenticated) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
                    <h1 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                        Admin Login
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                placeholder="Enter admin password"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6 py-12 max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">
                            Waitlist Dashboard
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                            {loading ? "Loading..." : `${leads.length} total signups`}
                        </p>
                    </div>
                    <Button
                        onClick={handleExport}
                        disabled={leads.length === 0}
                        className="gap-2"
                    >
                        <Download className="h-4 w-4" />
                        Export CSV
                    </Button>
                </div>

                {/* Table */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                    </div>
                ) : leads.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            No signups yet. Share your waitlist to get started!
                        </p>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                            Joined At
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {leads.map((lead) => (
                                        <tr
                                            key={lead.id}
                                            className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                                                {lead.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">
                                                {lead.name || "—"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">
                                                {new Date(lead.created_at).toLocaleString("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(lead.id)}
                                                    disabled={deleting === lead.id}
                                                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                                                >
                                                    {deleting === lead.id ? (
                                                        <Loader2 className="h-4 w-4 animate-spin" />
                                                    ) : (
                                                        <Trash2 className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
