import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Approach", href: "#approach" },
    { name: "Features", href: "#features" },
    { name: "Science", href: "#trust" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/50 dark:border-slate-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg text-white overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-bold text-xl relative z-10">V</span>
              <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              VytalCare
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-slate-600 dark:text-slate-300 hover:text-primary"
            onClick={() => window.open("https://health-navigator-copy.vercel.app/", "_blank")}
          >
            Log in
          </Button>
          <Button
            className="bg-primary hover:bg-teal-700 text-white rounded-full px-6 shadow-lg shadow-teal-900/20"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Waitlist
          </Button>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700 dark:text-slate-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => window.open("https://your-actual-app.vercel.app", "_blank")}
          >
            Log in
          </Button>
          <Button
            className="w-full bg-primary text-white rounded-full"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Waitlist
          </Button>

        </div>
      )}
    </header>
  );
}
