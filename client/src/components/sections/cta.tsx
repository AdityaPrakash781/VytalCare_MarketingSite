import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

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
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate(email);
  };

  return (
    <section id="cta" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">

        <div className="relative rounded-[2.5rem] overflow-hidden bg-teal-900 text-white px-6 py-20 text-center">
          {/* Decorative Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
              Ready to get ahead of your health?
            </h2>
            <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Join thousands of early adopters who are shifting from reactive treatment to proactive wellness. The waitlist is moving fast.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-14 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-teal-100/50 focus:outline-hidden focus:ring-2 focus:ring-teal-400 w-full sm:w-80"
              />
              <Button
                type="submit"
                disabled={mutation.isPending}
                size="lg"
                className="bg-white text-teal-900 hover:bg-teal-50 rounded-full h-14 px-8 font-bold text-lg"
              >
                {mutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Join Early Access
              </Button>
            </form>

            <p className="mt-6 text-sm text-teal-200/60">
              Limited spots available for the beta program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

