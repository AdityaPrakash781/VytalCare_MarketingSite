import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DnaHelix({ className }: { className?: string }) {
    const rows = 30; // Increased density for smoother look
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className={`relative flex items-center justify-center h-[800px] w-[200px] ${className}`}>
            {/* Central Axis Glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-teal-500/20 to-transparent blur-md"
            />

            {Array.from({ length: rows }).map((_, i) => (
                <DnaRow key={i} index={i} total={rows} />
            ))}
        </div>
    );
}

function DnaRow({ index, total }: { index: number; total: number }) {
    // Config
    const totalHeight = 800;
    const spacing = totalHeight / total;
    const yPos = (index - total / 2) * spacing;

    // Helix Parameters
    const duration = 12; // Slower, more elegant rotation
    const delay = -(duration / total) * index * 2; // Stagger for spiral effect

    return (
        <div
            className="absolute top-1/2 left-1/2 w-full flex items-center justify-center perspective-[1000px]"
            style={{
                transform: `translate(-50%, calc(-50% + ${yPos}px))`,
            }}
        >
            <motion.div
                className="relative w-48 h-12 flex items-center justify-between pointer-events-none"
                animate={{ rotateY: 360 }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                        ease: "linear",
                        delay: delay,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Strand 1 (Teal) */}
                    <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-300 to-teal-600 shadow-[0_0_15px_rgba(45,212,191,0.6)]"
                        style={{ transform: "translateZ(30px)" }}
                    >
                    <div className="absolute inset-0 bg-white/50 rounded-full blur-[1px] opacity-50" />
                    </motion.div>

                    {/* Genetic Bridge */}
                <div className="absolute inset-x-4 h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/30 to-cyan-500/0">
                        {/* Center hydrogen bond */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20 blur-[1px]" />
                    </div>

                    {/* Strand 2 (Cyan) */}
                    <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                        style={{ transform: "translateZ(-30px)" }}
                    >
                    <div className="absolute inset-0 bg-white/50 rounded-full blur-[1px] opacity-50" />
                    </motion.div>
                </motion.div>
            </div>
            );
}
