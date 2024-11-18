// app/components/ui/PageWrapper.tsx
import { Particles } from "./Particles"

interface PageWrapperProps {
    children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className="min-h-screen bg-[#111] relative overflow-hidden">
            {/* Global gradient background */}
            <div className="fixed inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 opacity-50 pointer-events-none" />

            {/* Animated background effects */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Top-right glow */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                             bg-purple-500/20 blur-[100px] animate-pulse"
                />

                {/* Bottom-left glow */}
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full
                             bg-blue-500/20 blur-[100px] animate-pulse"
                    style={{ animationDelay: "2s" }}
                />

                {/* Center gradient orb */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                             w-[800px] h-[800px] rounded-full opacity-[0.15]
                             bg-gradient-to-r from-purple-500 to-blue-500 blur-[120px]
                             animate-spin-slow"
                />

                {/* Particles with z-index to ensure visibility */}
                <div className="relative z-10">
                    <Particles />
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02] pointer-events-none" />

            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}
