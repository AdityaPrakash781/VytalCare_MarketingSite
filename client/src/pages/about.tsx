import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Activity, Brain, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-teal-100 dark:selection:bg-teal-900">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 px-6 container mx-auto text-center relative">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 backdrop-blur-sm mb-6">
                            <span className="text-teal-600 dark:text-teal-400 text-[10px] font-bold tracking-widest uppercase">Our Philosophy</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-slate-900 dark:text-white mb-6 tracking-tighter leading-[1.1] text-balance">
                            Health should be <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">proactive</span>, not reactive.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                            We're building the intelligence layer for your body—giving you the time, clarity, and control to prevent tomorrow's health crises today.
                        </p>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl relative z-10 border border-white/20">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                                        alt="Future of health visualization"
                                        className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <p className="text-white/90 text-xs font-medium tracking-wide border-l-2 border-teal-400 pl-3">
                                            Turning biological data into actionable foresight.
                                        </p>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10" />
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-2xl md:text-4xl font-heading font-medium text-slate-900 dark:text-white mb-6 leading-tight">
                                    The Problem with <span className="italic font-serif text-slate-500 dark:text-slate-400">"Wait and See"</span>
                                </h2>
                                <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                                    <p>
                                        Modern healthcare is miraculous at fixing broken things. But it is fundamentally reactive system designed for crisis management, not health optimization.
                                    </p>
                                    <p>
                                        By the time you feel sick, the biological cascade has often been running for weeks or months. We believe you deserve to know sooner—when intervention is simple and effective.
                                    </p>

                                    <div className="pl-5 border-l-2 border-teal-500/30 dark:border-teal-500/50 my-6">
                                        <p className="font-medium text-teal-800 dark:text-teal-300 italic text-base">
                                            "ProVytal uses predictive AI to detect subtle shifts in your biometrics—turning noise into signal, and signal into action."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section id="approach" className="py-24 container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl md:text-4xl font-heading font-medium text-slate-900 dark:text-white mb-4">
                            Three Pillars of Proactive Health
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400 font-light">
                            A complete system designed to keep you ahead of the curve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Activity,
                                title: "Early Detection",
                                desc: "Monitoring micromovements in HRV, RHR, and sleep to spot anomalies weeks before symptoms appear."
                            },
                            {
                                icon: Brain,
                                title: "Decision Support",
                                desc: "Contextual AI that doesn't just show data, but explains *what it means* and *what to do next*."
                            },
                            {
                                icon: HeartHandshake,
                                title: "Lifestyle Intelligence",
                                desc: "Personalized, achievable adjustments to your daily routine that compound into long-term vitality."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group h-full p-6 rounded-[1.5rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-t border-l border-r border-white/50 dark:border-white/10 border-b-[3px] border-b-slate-200/60 dark:border-b-slate-950 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(20,184,166,0.3),0_8px_24px_-8px_rgba(20,184,166,0.2)] hover:border-teal-500/10 hover:border-b-teal-500 dark:hover:border-b-teal-400"
                            >
                                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-28 bg-[#0B1221] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="block text-teal-400/80 font-mono text-xs tracking-widest uppercase mb-6">The Vision</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.2] mb-10 text-balance">
                                "We imagine a world where your health isn't a mystery you solve in the emergency room, but a story you write every day."
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto rounded-full opacity-50" />
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                            Join the movement.
                        </h2>
                        <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/20">
                            <Link href="/#cta">
                                Join the Waitlist
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
