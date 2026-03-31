"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function FloatingPaths({ position, isDark }: { position: number; isDark: boolean }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Dark mode: beige/cream, Light mode: golden/brown
        color: isDark 
            ? `rgba(245,245,220,${0.05 + i * 0.015})` 
            : `rgba(139,109,63,${0.08 + i * 0.02})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={isDark ? 0.3 + path.id * 0.02 : 0.4 + path.id * 0.025}
                        initial={{ pathLength: 0.3, opacity: 0.5 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({ children }: { children?: React.ReactNode }) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === "dark") : true;

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0">
                <FloatingPaths position={1} isDark={isDark} />
                <FloatingPaths position={-1} isDark={isDark} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                {children}
            </div>
        </div>
    );
}
