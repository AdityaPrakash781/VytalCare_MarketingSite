import { motion } from "framer-motion";

export function HealthRings() {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] flex items-center justify-center">
      {/* Breathing Halo */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-teal-500/20 via-teal-500/5 to-transparent rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow Center */}
      <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Outer Ring */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        style={{ originX: "50%", originY: "50%" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <g transform="rotate(-90 50 50)">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none"
            className="text-slate-200 dark:text-slate-800 opacity-20" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient1)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.75 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
        </g>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Middle Ring */}
      <motion.svg
        className="absolute w-[80%] h-[80%]"
        viewBox="0 0 100 100"
        style={{ originX: "50%", originY: "50%" }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        <g transform="rotate(-90 50 50)">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none"
            className="text-slate-200 dark:text-slate-800 opacity-20" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient2)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.85 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          />
        </g>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Inner Ring */}
      <motion.svg
        className="absolute w-[60%] h-[60%]"
        viewBox="0 0 100 100"
        style={{ originX: "50%", originY: "50%" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <g transform="rotate(-90 50 50)">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none"
            className="text-slate-200 dark:text-slate-800 opacity-20" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient3)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.6 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1.1 }}
          />
        </g>
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99F6E4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Center Score */}
      <motion.div
        className="absolute w-[35%] h-[35%] bg-white dark:bg-slate-900 rounded-full shadow-2xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <div className="text-3xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">92</div>
        <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
          Vytal Score
        </div>

        <div className="absolute -top-2 right-2 flex items-center gap-1 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span>Live</span>
        </div>
      </motion.div>

      <motion.div
  className="absolute -right-10 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:block"
  initial={{ x: 20, opacity: 0 }}
  animate={{
    x: 0,
    y: [0, -8, 0],
    opacity: 1,
  }}
  transition={{
    x: { duration: 0.8, delay: 2 },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
    opacity: { duration: 0.8, delay: 2 },
  }}
>
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-teal-500" />
    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
      Sleep optimal
    </span>
  </div>
</motion.div>

<motion.div
className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:block"

  initial={{ x: -20, opacity: 0 }}
  animate={{
    x: 0,
    y: [0, -10, 0],
    opacity: 1,
  }}
  transition={{
    x: { duration: 0.8, delay: 2.2 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
    opacity: { duration: 0.8, delay: 2.2 },
  }}
>
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-orange-400" />
    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
      Hydration low
    </span>
  </div>
</motion.div>

<motion.div
  className="absolute right-10 bottom-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:block"
  initial={{ y: 20, opacity: 0 }}
  animate={{
    y: [0, -6, 0],
    opacity: 1,
  }}
  transition={{
    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
    opacity: { duration: 0.8, delay: 2.5 },
  }}
>
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-green-400" />
    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
      Stress stable
    </span>
  </div>
</motion.div>


    </div>
  );
}
