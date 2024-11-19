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
    hover: { scale: 1.02 }, // Reduced scale effect for better mobile experience
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
            className="flex flex-col md:flex-row items-start gap-4 md:gap-8 p-4 md:p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-purple-500/20
            hover:bg-gray-800/50 transition-all duration-300 ease-in-out"
        >
            {logo && (
                <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0 mx-auto md:mx-0">
                    <Image
                        src={logo}
                        alt={`${institution} Logo`}
                        width={96}
                        height={96}
                        className="rounded-lg shadow-md ring-2 ring-purple-500/20"
                    />
                </div>
            )}
            <div className="flex-1 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-white text-center md:text-left">{institution}</h3>
                <p className="text-gray-400 text-center md:text-left">{degree}</p>
                {duration && (
                    <p className="text-sm text-gray-500 mt-1 text-center md:text-left">{duration}</p>
                )}
                <ul className="list-disc list-inside mt-3 md:mt-4 space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
                    {details.map((detail, index) => (
                        <li
                            key={index}
                            className="hover:text-purple-400 transition-colors duration-200 pl-4 -indent-4"
                        >
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}