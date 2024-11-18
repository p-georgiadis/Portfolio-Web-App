import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
    href?: string;
    size?: 'sm' | 'md' | 'lg';
    download?: boolean | string;
    target?: string; // Add target explicitly
    rel?: string; // Add rel explicitly
}

export function Button({
                           children,
                           className,
                           variant = 'default',
                           size = 'md',
                           href,
                           download,
                           target, // Destructure target
                           rel, // Destructure rel
                           ...props
                       }: ButtonProps) {
    const baseStyles = cn(
        "inline-flex items-center justify-center rounded-lg font-medium",
        "transform transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
    );

    const variants = {
        default: cn(
            "bg-gradient-to-r from-purple-600 to-blue-600",
            "hover:from-purple-500 hover:to-blue-500",
            "text-white shadow-lg shadow-purple-500/25",
            "hover:shadow-purple-500/40"
        ),
        outline: cn(
            "border border-gray-700 text-gray-300",
            "hover:border-gray-600 hover:text-gray-200",
            "hover:bg-gray-800/50",
            "backdrop-blur-sm"
        )
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link
                href={href}
                target={target} // Use target here
                rel={rel} // Use rel here
                className={classes}
                download={download ? String(download) : undefined}
            >
                {children}
            </Link>
        );
    }

    return <button className={classes} {...props}>{children}</button>;
}
