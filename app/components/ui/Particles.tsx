// components/Particles.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useParticleStore } from "@/app/lib/store";

interface Particle {
    id: number;
    x: number;
    y: number;
    delay: number;
}

export function Particles() {
    const { particles, initializeParticles } = useParticleStore();

    useEffect(() => {
        if (particles.length === 0) {
            initializeParticles();
        }
    }, [particles.length, initializeParticles]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            <AnimatePresence>
                {particles.map((particle: Particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        initial={{
                            opacity: 0.2,
                            scale: 0.5,
                        }}
                        animate={{
                            top: [`${particle.y}%`, `${Math.max(particle.y - 70, 0)}%`],
                            opacity: [0.2, 0.4, 0.2],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
