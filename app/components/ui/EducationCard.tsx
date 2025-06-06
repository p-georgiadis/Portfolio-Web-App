"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EducationCardProps {
    logo?: string;
    institution: string;
    degree: string;
    duration?: string;
    gpa?: string;
    specializations?: string[];
    aiCertificate?: string;
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
                                  gpa,
                                  specializations,
                                  aiCertificate,
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white text-center md:text-left">{institution}</h3>
                    {gpa && (
                        <span className="text-sm md:text-base font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full mt-2 md:mt-0 mx-auto md:mx-0 w-fit">
                            GPA: {gpa}
                        </span>
                    )}
                </div>

                <p className="text-gray-400 text-center md:text-left font-medium">{degree}</p>

                {duration && (
                    <p className="text-sm text-gray-500 mt-1 text-center md:text-left">{duration}</p>
                )}

                {specializations && specializations.length > 0 && (
                    <div className="mt-3">
                        <h4 className="text-sm font-semibold text-purple-300 mb-2 text-center md:text-left">Specializations:</h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {specializations.map((spec, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-200"
                                >
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {aiCertificate && (
                    <div className="mt-3">
                        <h4 className="text-sm font-semibold text-purple-300 mb-2 text-center md:text-left">Artificial Intelligence Graduate Certificate:</h4>
                        <p className="text-sm text-gray-300 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-2 rounded-md border border-purple-500/30 text-center md:text-left">
                            {aiCertificate}
                        </p>
                    </div>
                )}

                {details && details.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold text-purple-300 mb-2 text-center md:text-left">Key Coursework:</h4>
                        <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
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
                )}
            </div>
        </motion.div>
    );
}