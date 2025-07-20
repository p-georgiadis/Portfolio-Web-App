"use client";

import { Button } from './components/ui/Button'
import Image from 'next/image'
import { PageWrapper } from './components/ui/PageWrapper'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <PageWrapper>
            <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center p-4 md:p-8 mt-16 md:mt-0">
                <div className="relative max-w-3xl text-center space-y-4 md:space-y-6 z-10">
                    <motion.div
                        className="mx-auto w-24 h-24 md:w-48 md:h-48 mb-6 md:mb-8 relative"
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                            borderRadius: ["50%", "45%", "45%", "50%"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1],
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: {duration: 0.3}
                        }}
                    >
                        <motion.div
                            className="absolute -inset-2 rounded-full"
                            animate={{
                                background: [
                                    "linear-gradient(0deg, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.4) 100%)",
                                    "linear-gradient(180deg, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.4) 100%)",
                                    "linear-gradient(360deg, rgba(168,85,247,0.4) 0%, rgba(59,130,246,0.4) 100%)"
                                ],
                            }}
                            transition={{
                                duration: 4,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        />
                        <Image
                            src="/images/profile_logo_transition.gif"
                            alt="Profile"
                            width={128}
                            height={128}
                            className="rounded-full p-1 bg-[#111] relative w-24 h-24 md:w-48 md:h-48"
                        />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="font-mono text-2xl md:text-4xl block mb-2 text-gray-400">
                        Hello, I&#39;m
                    </span>
                                        <span className="bg-gradient-to-r from-purple-400 to-blue-400
                                   bg-clip-text text-transparent">
                        Pano Georgiadis
                    </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-mono text-gray-400">
                        MS Computer Science | Cloud & DevOps Engineer | Microsoft Certified Expert
                    </h2>

                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        I architect and deploy enterprise-grade cloud infrastructure with proven business impact—
                        delivering 90% cost reductions and 99.9% uptime as the sole IT professional for a growing
                        organization.
                        With an MS in Computer Science (4.0 GPA) and 35+ certifications including Microsoft Azure
                        DevOps Engineer Expert, AWS Solutions Architect, and 14 CompTIA specializations, I specialize
                        in building scalable, resilient platforms through intelligent automation, Infrastructure as Code,
                        and modern DevOps practices.
                    </p>
                    <div className="flex justify-center gap-4 mt-4 md:mt-6">
                        <Button href="/projects" variant="outline">
                            Projects
                        </Button>
                        <Button href="/about" variant="default">
                            About
                        </Button>
                        <Button href="/contact" variant="outline">
                            Contact
                        </Button>
                    </div>

                    <a
                        href="/Pano%20Georgiadis%20Resume.pdf"
                        className="inline-flex items-center mt-6 md:mt-8 text-gray-400
                                 hover:text-gray-300 transition-colors group"
                        download
                    >
                        <span>Résumé</span>
                        <Download
                            className="w-4 h-4 ml-2 transform group-hover:translate-y-0.5 transition-transform"/>
                    </a>
                </div>
            </div>
        </PageWrapper>
    )
}
