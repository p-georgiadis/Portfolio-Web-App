"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import { User, Code, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {AnimatedHeader} from "@/app/components/ui/AnimatedHeader";


export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const constraintsRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { href: "/about", label: "About", icon: User },
        { href: "/projects", label: "Projects", icon: Code },
        { href: "/contact", label: "Contact", icon: Mail },
    ];

    return (
        <AnimatedHeader>
            <motion.nav
                className="fixed top-0 w-full z-50 bg-[#111]/95 backdrop-blur-md shadow-lg shadow-purple-500/5 border-b border-gray-800 transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Draggable Logo */}
                        <div ref={constraintsRef} className="relative flex items-center w-[300px]">
                            <motion.div
                                drag
                                dragConstraints={constraintsRef}
                                dragElastic={0.4}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
                                className="cursor-grab active:cursor-grabbing"
                                onDoubleClick={() => router.push("/")}
                                title="Drag me or double-click to go home"
                            >
                                <Image
                                    src="/icons/oie_png.png"
                                    alt="Pano Georgiadis Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                            </motion.div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-1 sm:space-x-4">
                            {navItems.map(({ href, label, icon: Icon }) => {
                                const isActive = pathname === href;
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`relative px-3 py-2 rounded-lg group transition-all duration-300
                                              hover:bg-gray-800/50 ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        <span className="relative z-10 flex items-center space-x-1">
                                            <Icon className="w-4 h-4" />
                                            <span className="hidden sm:block">{label}</span>
                                        </span>

                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active"
                                                className="absolute inset-0 bg-gray-800 rounded-lg"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            />
                                        )}

                                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-purple-400/0 via-purple-400/70 to-blue-400/0
                                                   opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.nav>
        </AnimatedHeader>
    );
}
