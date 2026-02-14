import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Activity, Brain, HeartHandshake, Globe } from "lucide-react";
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
                <section className="py-24 px-6 container mx-auto text-center relative overflow-hidden">
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] text-balance">
                            Health should be <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">proactive</span>, not reactive.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed max-w-2xl mx-auto text-balance">
                            We're building the intelligence layer for your body—giving you the time, clarity, and control to prevent tomorrow's health crises today.
                        </p>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="py-16 md:py-24 relative overflow-hidden">
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
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                                    The Problem with <span className="italic text-teal-600 dark:text-teal-400">"Wait and See"</span>
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
                <section className="py-20 md:py-32 bg-[#0B1221] text-white relative overflow-hidden">
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
                            <span className="block text-teal-400/80 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-8">The Vision</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.2] mb-10 text-balance">
                                "We imagine a world where your health isn't a mystery you solve in the emergency room, but a story you write every day."
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto rounded-full opacity-50" />
                        </motion.div>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-6xl">
                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200 dark:via-teal-800/60 to-transparent mb-12 md:mb-20 opacity-50" />

                        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-left"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-8 shadow-sm">
                                    <Globe className="w-6 h-6 animate-pulse" />
                                </div>

                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                                    Every Membership Creates Impact
                                </h2>

                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed text-pretty">
                                    <p>
                                        While advanced healthcare tools are rapidly evolving, billions of people still lack access to basic preventative care, early diagnostics, and reliable medical guidance. Preventable diseases continue to burden communities not because solutions don’t exist — but because access is uneven.
                                    </p>
                                    <p>
                                        ProVytal commits a portion of every membership toward initiatives that support preventative healthcare education, early detection programs, and digital health infrastructure in underserved communities. By joining ProVytal, you’re not only investing in your own health intelligence — you’re helping extend proactive healthcare to people who need it most.
                                    </p>
                                    <p>
                                        Every membership helps move healthcare from reactive treatment to early intervention, reduces long-term system strain, and supports a future where better health decisions are accessible to everyone. <span className="text-teal-700 dark:text-teal-400 font-medium">Because proactive healthcare shouldn’t be a privilege — it should be the global standard.</span>
                                    </p>
                                </div>

                                <div className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-teal-50/80 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 backdrop-blur-sm shadow-sm">
                                    <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                                    <span className="text-teal-800 dark:text-teal-200 font-medium text-sm">
                                        Preventative care reduces 60% of chronic disease risk
                                    </span>
                                </div>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/20 dark:border-white/10 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opactiy-60" />
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                                        alt="Global healthcare access"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <p className="text-white/90 text-sm font-medium tracking-wide">
                                            Connecting care to communities worldwide.
                                        </p>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-[80px] -z-10" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px] -z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pt-16 pb-24 md:pt-20 md:pb-32 container mx-auto px-6 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="block text-teal-600 dark:text-teal-400 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            Ready to Start?
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                            Join the movement.
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 font-sans font-light mb-10 leading-relaxed max-w-xl mx-auto">
                            Be part of the generation that chooses to know, not guess. Your future self will thank you.
                        </p>
                        <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-teal-600 dark:bg-teal-600/40 backdrop-blur-md border border-teal-500/30 hover:bg-teal-700 dark:hover:bg-teal-600/60 text-white shadow-xl shadow-teal-500/10 hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1">
                            <Link href="/#cta">
                                Join the Waitlist
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
