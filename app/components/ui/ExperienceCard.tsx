// app/components/ui/ExperienceCard.tsx
"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
    title: string;
    company: string;
    duration: string;
    details: string[];
}

const listItemVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: {
        x: 10,
        color: "#3b82f6",
        transition: { type: "tween", duration: 0.3 },
    },
};

export function ExperienceCard({
                                   title,
                                   company,
                                   duration,
                                   details,
                               }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative pl-8 border-l-2 border-gray-800 hover:border-blue-500 transition-all duration-300 ease-in-out p-6 bg-gray-900/50 rounded-lg shadow-lg"
        >
            {/* Circle Indicator */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-6 transition-transform transform group-hover:scale-110" />

            {/* Title and Company */}
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-400 mt-1 mb-4">
                {company} • {duration}
            </p>

            {/* Details */}
            <ul className="space-y-3">
                {details?.map((detail, index) => (
                    <motion.li
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={listItemVariants}
                        whileHover="hover"
                        className="text-gray-300 flex items-center"
                    >
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block mr-2"></span>
                        {detail}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}
