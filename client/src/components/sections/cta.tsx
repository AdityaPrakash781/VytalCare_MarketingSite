import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMagneticHover } from "@/hooks/use-magnetic-hover";
import { motion } from "framer-motion";
import treesBackground from "@/assets/trees.jpg";

export function CTASection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { ref: buttonRef, position } = useMagneticHover(0.15);

  // Spam protection
  const [formStartTime] = useState(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/leads", { email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      // User-friendly error message for duplicates
      const message = error.message.includes("already on the waitlist")
        ? "You're already on the list! We'll notify you soon."
        : error.message;

      toast({
        title: error.message.includes("already") ? "Already Registered" : "Error",
        description: message,
        variant: error.message.includes("already") ? "default" : "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Spam protection checks
    if (honeypot) {
      // Bot filled honeypot - silently reject
      console.warn("Spam detected: honeypot filled");
      return;
    }

    if (Date.now() - formStartTime < 2000) {
      // Submitted too fast - silently reject
      console.warn("Spam detected: too fast");
      return;
    }

    mutation.mutate(email);
  };

  return (
    <section id="cta" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">

        <motion.div
          className="relative rounded-[2.5rem] overflow-hidden text-white px-6 py-20 text-center"
          animate={{ filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${treesBackground})`,
                filter: "blur(2px)"
              }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
              Ready to get ahead of your health?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of early adopters who are shifting from reactive treatment to proactive wellness. The waitlist is moving fast.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Honeypot field - hidden from users, bots will fill it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-14 px-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-hidden focus:ring-2 focus:ring-white/50 focus:bg-white/25 w-full sm:w-80"
              />
              <motion.div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative inline-block"
              >
                <motion.div
                  className="absolute inset-0 bg-white/40 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <Button
                  ref={buttonRef as any}
                  type="submit"
                  disabled={mutation.isPending}
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 rounded-full h-14 px-8 font-bold text-lg relative z-10"
                >
                  {mutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Join Early Access
                </Button>
              </motion.div>
            </form>

            <p className="mt-6 text-sm text-white/60">
              Limited spots available for the beta program.
            </p>
          </div>
        </motion.div>
      </div>
    </section >
  );
}

