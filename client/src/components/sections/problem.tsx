import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section id="approach" className="pt-32 pb-4 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-7 tracking-tighter leading-[1.15]">
            By the time symptoms show…<br />
            <span className="text-slate-800 dark:text-slate-100 font-extrabold">it's already late.</span>
          </h2>
          <p className="text-xl text-slate-600/90 dark:text-slate-400/90 mb-5 leading-relaxed font-medium">
            Most apps show yesterday's data. ProVytal shows tomorrow's risks — so you can stay ahead today.
          </p>
          <p className="text-xs text-slate-500/70 dark:text-slate-400/70 tracking-widest uppercase">
            Most chronic conditions grow silently long before symptoms appear.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:from-transparent dark:via-slate-700/50 dark:to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-28 relative">
            {/* Connection Pulse Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[130%] h-[120px] hidden md:block z-0 pointer-events-none">
              <svg viewBox="0 0 400 100" className="w-full h-full opacity-60">
                <defs>
                  <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(20, 184, 166, 0)" />
                    <stop offset="10%" stopColor="rgba(20, 184, 166, 0.1)" />
                    <stop offset="50%" stopColor="#2dd4bf" />
                    <stop offset="90%" stopColor="rgba(20, 184, 166, 0.1)" />
                    <stop offset="100%" stopColor="rgba(20, 184, 166, 0)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background Line */}
                <path
                  d="M 0 50 L 170 50 L 185 15 L 200 50 L 215 85 L 230 50 L 400 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-slate-300/30 dark:text-slate-700/30"
                />

                {/* Animated Pulse */}
                <motion.path
                  d="M 0 50 L 170 50 L 185 15 L 200 50 L 215 85 L 230 50 L 400 50"
                  fill="none"
                  stroke="url(#pulse-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </svg>
            </div>
            {/* Old Way */}
            <motion.div
              className="bg-slate-100/60 dark:bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-md shadow-slate-400/30 dark:shadow-black/40 border border-slate-400/40 dark:border-slate-700 relative z-10 hover:shadow-lg hover:shadow-slate-400/35 transition-all duration-500 saturate-[0.85]"
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute -top-3.5 left-8 bg-gradient-to-br from-slate-300 to-slate-400 text-slate-700 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200 text-[0.7rem] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-transparent dark:border-slate-600">Reactive Health</div>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-slate-500/60 dark:text-slate-400 mb-3 font-semibold">After symptoms appear</p>
              <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-8 tracking-tight">Wait for Symptoms</h3>
              <ul className="space-y-4 text-slate-600/90 dark:text-slate-300">
                <li className="flex items-start gap-3.5">
                  <span className="text-red-400 dark:text-red-500/80 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Miss early warning signs your body sends</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-red-400 dark:text-red-500/80 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Small problems escalate into emergencies</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-red-400 dark:text-red-500/80 text-lg mt-0.5 font-bold">✕</span>
                  <span className="leading-relaxed">Health decisions happen under panic</span>
                </li>
              </ul>
            </motion.div>

            {/* Vytal Way */}
            <motion.div
              className="bg-gradient-to-br from-white via-teal-50/40 to-teal-50/60 dark:from-slate-900 dark:via-teal-950/30 dark:to-teal-950/40 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-teal-500/20 border-2 border-teal-400/40 dark:border-teal-500/40 relative z-20 group"
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Background atmospheric gradient */}
              <div className="absolute -inset-[100px] bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.08)_0%,_transparent_70%)] pointer-events-none -z-10" />

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/8 to-transparent rounded-[2rem] pointer-events-none"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Hover glow ring */}
              <motion.div
                className="absolute -inset-[2px] rounded-[2rem] -z-10 pointer-events-none"
              />

              <div className="absolute -top-3.5 left-8 bg-gradient-to-br from-teal-100 via-teal-50 to-emerald-50 text-teal-800 dark:from-teal-900/60 dark:via-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 text-[0.7rem] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md shadow-teal-500/25">Predictive Health</div>

              {/* Recommended label */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-teal-600/90 dark:bg-teal-500/90 text-white text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Recommended approach</div>

              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-slate-500/60 mb-3 font-semibold relative">Before symptoms appear</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 tracking-tight relative">Act on Signals</h3>
              <ul className="space-y-4 text-slate-700/90 dark:text-slate-400/90 relative">
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Catch problems weeks earlier</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Act calmly with guided insights</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-teal-600 dark:text-teal-500 text-lg mt-0.5 font-bold">✓</span>
                  <span className="leading-relaxed">Stay ahead instead of reacting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-center text-2xl md:text-3xl font-heading font-bold text-slate-900/95 dark:text-slate-200/95 tracking-tight mb-1">
            This isn't health tracking. It's <span className="text-teal-600 dark:text-teal-500 font-extrabold">health foresight</span>.
          </p>
          <p className="text-center text-sm text-slate-500/70 dark:text-slate-400/70">
            Every day without insight is a missed opportunity to prevent.
          </p>
        </div>
      </div>
    </section>
  );
}
