"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ReactNode, useState } from "react";

interface AnimatedHeaderProps {
    children: ReactNode;
}

export function AnimatedHeader({ children }: AnimatedHeaderProps) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Hide when scrolling down and show when scrolling up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else if (latest < previous || latest < 30) {
            setHidden(false);
        }
    });

    return (
        <motion.header
            initial={{ y: 0, opacity: 1 }}
            animate={hidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50"
        >
            {children}
        </motion.header>
    );
}
