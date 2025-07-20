"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Award, X } from "lucide-react";

interface EducationCardProps {
    logo?: string;
    institution: string;
    degree: string;
    duration?: string;
    gpa?: string;
    specializations?: string[];
    aiCertificate?: string;
    details: string[];
    mastersDiploma?: string;
    aiCertificateImage?: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
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
                                  mastersDiploma,
                                  aiCertificateImage,
                              }: EducationCardProps) {
    const [selectedDiploma, setSelectedDiploma] = useState<string | null>(null);

    if (!institution || !degree) {
        console.error("Missing required props for EducationCard:", { institution, degree });
        return null;
    }

    // Debug logging
    console.log('EducationCard props:', { mastersDiploma, aiCertificateImage });

    return (
        <>
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

                    {/* Digital Credentials Section */}
                    {(mastersDiploma || aiCertificateImage) && (
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold text-purple-300 mb-3 text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
                                <Award className="w-4 h-4" />
                                Digital Credentials
                            </h4>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {mastersDiploma && (
                                    <button
                                        onClick={() => {
                                            console.log('Clicking diploma button:', mastersDiploma);
                                            setSelectedDiploma(mastersDiploma);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20
                                        border border-purple-500/30 rounded-lg hover:border-purple-400/50
                                        hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30
                                        transition-all duration-200 text-sm text-purple-300 hover:text-purple-200"
                                    >
                                        <Award className="w-4 h-4" />
                                        View Master&apos;s Diploma
                                    </button>
                                )}
                                {aiCertificateImage && (
                                    <button
                                        onClick={() => {
                                            console.log('Clicking AI cert button:', aiCertificateImage);
                                            setSelectedDiploma(aiCertificateImage);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20
                                        border border-emerald-500/30 rounded-lg hover:border-emerald-400/50
                                        hover:bg-gradient-to-r hover:from-emerald-600/30 hover:to-teal-600/30
                                        transition-all duration-200 text-sm text-emerald-300 hover:text-emerald-200"
                                    >
                                        <Award className="w-4 h-4" />
                                        View AI Certificate
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {specializations && specializations.length > 0 && (
                        <div className="mt-4">
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

            {/* Diploma Modal with AnimatePresence */}
            <AnimatePresence>
                {selectedDiploma && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedDiploma(null)}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative max-w-4xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedDiploma(null)}
                                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={selectedDiploma}
                                    alt="Diploma"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}