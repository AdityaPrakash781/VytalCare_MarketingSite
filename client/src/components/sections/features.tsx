import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  CalendarHeart,
  ShieldAlert,
  ScanLine,
  HeartHandshake
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Holistic Health Score",
    description: "Not just steps. We synthesize sleep, hydration, HRV, and BMI into a single, actionable daily score that evolves with you.",
    color: "bg-blue-500"
  },
  {
    icon: Brain,
    title: "Agentic AI Analysis",
    description: "Our AI doesn't just store data; it thinks. It spots patterns—like rising resting heart rate—days before you feel symptoms.",
    color: "bg-purple-500"
  },
  {
    icon: CalendarHeart,
    title: "Smart Meds & Calendar",
    description: "Visual schedules synced with your life. Snap a photo of your prescription, and AI handles the rest, reminders included.",
    color: "bg-teal-500"
  },
  {
    icon: ShieldAlert,
    title: "Caregiver Emergency Link",
    description: "Peace of mind for families. If vitals go out of safe range, your trusted circle is notified instantly with context.",
    color: "bg-red-500"
  },
  {
    icon: ScanLine,
    title: "Lab & Rx Scanning",
    description: "Turn paper chaos into structured data. Scan your lab results to let our AI cross-reference them with your daily vitals.",
    color: "bg-indigo-500"
  },
  {
    icon: HeartHandshake,
    title: "Accessible Design",
    description: "Built for everyone. High contrast modes, color-blind friendly visualizations, and large typography options included.",
    color: "bg-emerald-500"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mt-2 mb-6">
            A thinking system for your body.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            ProVytal moves beyond simple tracking to provide intelligent, contextual health awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.7,
                ease: "easeOut"
              }}
              className="h-full"
            >
              {/* Shallow Card Holder (Tray) with deep inset shadow */}
              <div className="group h-full p-2 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-300">
                {/* The Card with physical depth (bottom border) and lighting */}
                <div className="h-full p-8 rounded-[2rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-t border-l border-r border-white/50 dark:border-white/10 border-b-[3px] border-b-slate-200/60 dark:border-b-slate-950 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-12px_rgba(20,184,166,0.3),0_8px_24px_-8px_rgba(20,184,166,0.2)] group-hover:border-b-teal-500 group-hover:border-teal-500/10 active:translate-y-0 active:shadow-sm">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-1 ring-inset ring-black/5`}>
                    <feature.icon className={`w-7 h-7 text-slate-900 dark:text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
