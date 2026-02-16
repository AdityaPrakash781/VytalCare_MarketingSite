import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import loginBg from "@/assets/login-bg.png";
import { DnaHelix } from "@/components/ui/dna-helix";

export default function Login() {
    return (
        <div className="h-screen w-full overflow-hidden bg-slate-950 font-sans selection:bg-teal-500/30 relative flex flex-col">
            <Navbar />

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url(${loginBg})` }}
                />

                {/* Deep navy/teal gradient base */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/90" />

                {/* Glow Orbs */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"
                />

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />

                {/* 3D Rotating DNA Helix */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 scale-[1.2] md:scale-[1.5] rotate-[25deg] opacity-90 blur-[0.5px]">
                        <DnaHelix />
                    </div>
                </div>
            </div>

            <main className="relative z-10 flex-grow flex items-center justify-center px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-md mb-8 shadow-lg shadow-teal-500/10"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                        </span>
                        <span className="text-base md:text-lg font-bold text-teal-100 tracking-wider uppercase drop-shadow-sm">Coming Soon &middot; Late 2026</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.1]"
                    >
                        Your health shouldn&#39;t react. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            It should predict.
                        </span>
                    </motion.h1>

                    {/* Supporting Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        ProVytal uses predictive AI to detect risk patterns before symptoms appear — helping you act early, stay calm, and stay ahead.
                    </motion.p>

                    {/* Extra Line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-slate-500 font-medium"
                    >
                        Preventive intelligence for a longer, healthier life.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/#cta">
                            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-slate-950 font-semibold text-lg hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                Join Early Access
                                <Sparkles className="w-5 h-5 ml-2 text-teal-600" />
                            </Button>
                        </Link>

                        <Link href="/">
                            <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-medium text-lg">
                                Return Home
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </main>

            {/* Footer / Disclaimer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-0 right-0 text-center z-10 px-4"
            >
                <p className="text-xs text-slate-600 tracking-wider uppercase font-medium">
                    ProVytal &copy; 2026 &mdash; The Future of Secure Health
                </p>
            </motion.div>
        </div>
    );
}
