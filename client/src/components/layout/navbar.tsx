import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ColorBlindToggle } from "@/components/color-blind-toggle";

/**
 * Smooth-scroll to a DOM element by ID.
 * CSS `scroll-margin-top` on the sections handles the fixed navbar offset.
 */
function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After navigating to home with a hash, smooth-scroll to the target section
  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const id = window.location.hash.slice(1);
      // Small delay to let the home page render first
      const timer = setTimeout(() => smoothScrollTo(id), 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Approach", href: "#approach" },
    { name: "Features", href: "#features" },
    { name: "Science", href: "#trust" },
  ];

  /**
   * Handles navigation for hash-based links.
   * - If already on the home page, smooth-scroll to the section.
   * - If on another page (e.g. /about), navigate to /#section first;
   *   the useEffect above will pick up the hash and scroll after render.
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "/") {
        // "Home" link — just navigate normally
        return;
      }

      e.preventDefault();
      const sectionId = href.replace("#", "");

      if (location === "/") {
        // Already on home — just smooth-scroll
        smoothScrollTo(sectionId);
      } else {
        // On another page — navigate to home with hash
        setLocation(`/${href}`);
      }

      setMobileMenuOpen(false);
    },
    [location, setLocation]
  );

  const handleJoinWaitlist = () => {
    if (location === "/") {
      smoothScrollTo("cta");
    } else {
      setLocation("/#cta");
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled || location !== "/"
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/50 dark:border-slate-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/about" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden scale-105 transition-transform duration-300">
            <img
              src="/favicon.png"
              alt="ProVytal logo"
              className="w-full h-full object-cover"
            />
          </div>


          <span className="font-heading font-bold text-lg md:text-2xl tracking-tight text-slate-900 dark:text-white">
            ProVytal
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ColorBlindToggle />
          <ModeToggle />
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-slate-600 dark:text-slate-300 hover:text-primary cursor-pointer"
            >
              Log in
            </Button>
          </Link>
          <Button
            className="bg-primary hover:bg-teal-600 text-white rounded-full px-6 shadow-lg shadow-teal-900/20 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20 active:scale-95 cursor-pointer"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>


        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ColorBlindToggle />
          <ModeToggle />
          <button
            className="text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5 z-40">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-medium text-slate-800 dark:text-slate-100 py-2 border-b border-slate-100 dark:border-slate-800/50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full justify-center text-lg h-12"
              >
                Log in
              </Button>
            </Link>
            <Button
              className="w-full bg-primary text-white rounded-full text-lg h-12 shadow-lg"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
