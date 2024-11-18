"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function AnimatedLogo() {
    return (
        <div className="relative w-96 h-96 mx-auto mb-8 p-12">
            <div className="relative w-72 h-72 mx-auto">
                {/* Outer rotating rings */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-75"
                    style={{
                        background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)",
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        },
                    }}
                />

                {/* Second ring rotating in opposite direction */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{
                        background: "conic-gradient(from 180deg, #4f46e5, #8b5cf6, #4f46e5)",
                    }}
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Inner container */}
                <motion.div
                    className="absolute inset-2 rounded-full bg-[#111]/90 p-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                >
                    {/* Animated shine effects */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent"
                        style={{
                            mixBlendMode: "overlay",
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotate: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            },
                        }}
                    />

                    {/* Pulsing glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Logo container with hover effect */}
                    <motion.div
                        className="relative w-full h-full"
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.2,
                                type: "spring",
                                stiffness: 300,
                            },
                        }}
                    >
                        <Image
                            src="/icons/oie_png.png"
                            alt="PG Cloud Engineer Logo"
                            width={288}  // This matches the parent container (w-72)
                            height={288} // This matches the parent container (h-72)
                            className="object-contain p-2"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
