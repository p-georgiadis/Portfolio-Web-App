// app/components/ui/Section.tsx
"use client"

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({
                            title,
                            description,
                            children,
                            className,
                        }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            ref={ref}
            className={cn(
                "pt-8 sm:pt-12 pb-6 sm:pb-8 relative z-10", // Reduced padding values
                className
            )}
        >
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.div
                    className="max-w-2xl mb-4 md:mb-6"
                    variants={variants}
                    transition={{duration: 0.5, ease: "easeOut"}}
                >
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400
                                     bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500
                                     transition-all duration-300 ease-in-out backdrop-blur-none">
                            {title}
                        </h2>
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                            initial={{scaleX: 0}}
                            animate={{scaleX: isInView ? 1 : 0}}
                            transition={{duration: 0.7, delay: 0.3}}
                        />
                    </div>

                    {description && (
                        <motion.p
                            className="mt-4 text-base md:text-lg text-gray-400 backdrop-blur-none"
                            variants={variants}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.div>

                <motion.div
                    variants={variants}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="relative z-10 backdrop-blur-none"
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
}
