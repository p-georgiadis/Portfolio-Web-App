// app/components/ui/Card.tsx
"use client"

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from 'react';

interface CardProps {
    id?: string;
    title: ReactNode;
    description: string;
    tags?: string[];
    infrastructure?: string[];
    techDetails?: {
        frontend?: string[];
        deployment?: string[];
    };
    onClickAction?: () => void;
    className?: string;
    children?: ReactNode;
    link?: string;
}

export function Card({
                         id,
                         title,
                         description,
                         tags,
                         className,
                         onClickAction,
                         children,
                         link
                     }: CardProps) {
    if (onClickAction && id) {
        return (
            <motion.div
                layoutId={`card-${id}`}
                onClick={onClickAction}
                className={cn(
                    "p-6 rounded-lg border border-gray-800 bg-gray-900/50",
                    "hover:border-gray-700 hover:bg-gray-800/50",
                    "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10",
                    "cursor-pointer",
                    className
                )}
            >
                <motion.div layoutId={`title-${id}`}>
                    <div className="text-xl font-semibold mb-2 group-hover:text-purple-400">
                        {title}
                    </div>
                </motion.div>

                <motion.div layoutId={`description-${id}`}>
                    <p className="text-gray-400 mb-4">{description}</p>
                </motion.div>

                {tags && (
                    <motion.div layoutId={`tags-${id}`} className="flex flex-wrap gap-2">
                        {tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {children}
            </motion.div>
        );
    }

    return (
        <div
            className={cn(
                "p-6 rounded-lg border border-gray-800 bg-gray-900/50",
                "hover:border-gray-700 hover:bg-gray-800/50",
                "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10",
                className
            )}
        >
            <div className="text-xl font-semibold mb-2 group-hover:text-purple-400">
                {title}
            </div>

            <p className="text-gray-400 mb-4">{description}</p>

            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {children}

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Learn more →
                </a>
            )}
        </div>
    );
}
