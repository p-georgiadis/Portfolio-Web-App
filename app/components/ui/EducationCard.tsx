// app/components/ui/EducationCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EducationCardProps {
    logo?: string;
    institution: string;
    degree: string;
    duration?: string;
    details: string[];
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
};

export function EducationCard({
                                  logo,
                                  institution,
                                  degree,
                                  duration,
                                  details,
                              }: EducationCardProps) {
    if (!institution || !degree) {
        console.error("Missing required props for EducationCard:", { institution, degree });
        return null;
    }

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex flex-col md:flex-row items-start gap-8 p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-purple-500/20
            hover:bg-gray-800/50 transition-all duration-300 ease-in-out"
        >
            {logo && (
                <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                        src={logo}
                        alt={`${institution} Logo`}
                        width={96}
                        height={96}
                        className="rounded-lg shadow-md ring-2 ring-purple-500/20"
                    />
                </div>
            )}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{institution}</h3>
                <p className="text-gray-400">{degree}</p>
                {duration && (
                    <p className="text-sm text-gray-500 mt-1">{duration}</p>
                )}
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                    {details.map((detail, index) => (
                        <li key={index} className="hover:text-purple-400 transition-colors duration-200">
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
