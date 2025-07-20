import { motion } from "framer-motion";
import { X, Play } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

interface ExpandedCardProps {
    id: string;
    title: string;
    description: string;
    tags?: string[];
    infrastructure?: string[];
    techDetails?: Record<string, string[]>; // Allow dynamic keys
    link?: string;
    videoDemo?: string; // Add this line
    onCloseAction: () => void;
}

const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
};

const cardVariants = {
    closed: {
        scale: 0.95,
        opacity: 0,
        transition: { duration: 0.15 }  // Reduced from 0.2
    },
    open: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,  // Reduced from 0.3
            ease: [0.16, 1, 0.3, 1]  // Adjusted easing
        }
    }
};

const contentVariants = {
    closed: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.15 }  // Reduced from 0.2
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,  // Reduced from 0.3
            delay: 0.05  // Reduced from 0.1
        }
    }
};

// Animation variants for text items
const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.3 }
    })
};

export function ExpandedCard({
                                 id,
                                 title,
                                 description,
                                 tags,
                                 infrastructure,
                                 techDetails,
                                 link,
                                 videoDemo, // Add this line
                                 onCloseAction
                             }: ExpandedCardProps) {
    return (
        <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onCloseAction} // Close when clicking on the overlay or card
        >
            {/* Card container */}
            <motion.div
                layoutId={`card-${id}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={cardVariants}
                className="w-full max-w-4xl bg-gray-900/95 rounded-lg overflow-hidden shadow-lg relative"
            >
                {/* Scrollable content */}
                <motion.div
                    className="relative p-6 max-h-[90vh] overflow-y-auto custom-scrollbar"
                    variants={contentVariants}
                    onClick={(e) => e.stopPropagation()} // Prevent close on content click
                >
                    {/* Close button */}
                    <motion.button
                        className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        onClick={onCloseAction}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <X size={24} />
                    </motion.button>

                    {/* Card content */}
                    <motion.div layoutId={`title-${id}`} className="mb-4">
                        <h2 className="text-3xl font-bold">{title}</h2>
                    </motion.div>

                    <motion.div layoutId={`description-${id}`} className="mb-6">
                        <p className="text-gray-400">{description}</p>
                    </motion.div>

                    {/* Video Demo Section - Add this section */}
                    {videoDemo && (
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Play className="w-5 h-5 text-purple-400" />
                                Video Demonstration
                            </h3>
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                                <iframe
                                    src={videoDemo.replace('watch?v=', 'embed/').replace('&t=', '?t=')}
                                    title={`${title} - Video Demonstration`}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    )}

                    <motion.div layoutId={`tags-${id}`} className="flex flex-wrap gap-2 mb-8">
                        {tags?.map((tag, i) => (
                            <motion.span
                                key={tag}
                                custom={i}
                                variants={textItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm
                                    hover:bg-purple-500/80 transition-colors cursor-pointer"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div className="space-y-8">
                        {infrastructure && (
                            <motion.div>
                                <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
                                <ul className="space-y-2">
                                    {infrastructure.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            custom={i}
                                            variants={textItemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="text-gray-400"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {techDetails &&
                            Object.entries(techDetails).map(([section, items]) => (
                                <motion.div key={section}>
                                    <h3 className="text-xl font-semibold mb-4 capitalize">
                                        {section.replace(/_/g, " ")}
                                    </h3>
                                    <ul className="space-y-2">
                                        {items.map((item, i) => (
                                            <motion.li
                                                key={item}
                                                custom={i}
                                                variants={textItemVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="text-gray-400"
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}

                        {/* Updated buttons section to include video demo link */}
                        <motion.div className="flex flex-wrap gap-4 mt-8">
                            {link && (
                                <Button
                                    href={link}
                                    variant="default"
                                    size="md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </Button>
                            )}

                            {videoDemo && (
                                <Button
                                    href={videoDemo}
                                    variant="outline"
                                    size="md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-600/10 border-red-600/30 text-red-400 hover:bg-red-600/20 hover:border-red-600/50"
                                >
                                    <Play className="w-4 h-4 mr-2" />
                                    Watch on YouTube
                                </Button>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}