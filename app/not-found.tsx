// app/not-found.tsx
import { AnimatedLogo } from "@/app/components/ui/AnimatedLogo";
import { Button } from "@/app/components/ui/Button";
import { PageWrapper } from "@/app/components/ui/PageWrapper";

export default function NotFound() {
    return (
        <PageWrapper>
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                {/* Logo Section */}
                <div className="scale-75">
                    <AnimatedLogo />
                </div>

                {/* Content Section */}
                <div className="text-center -mt-20">
                    <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse">
                        404
                    </h1>

                    <div className="mt-4 mb-8">
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                    </div>

                    <h2 className="text-3xl font-semibold text-gray-100 mb-4">
                        Lost in the Cloud
                    </h2>

                    <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
                        The page you&#39;re looking for seems to have drifted into another dimension
                    </p>

                    <Button href="/" size="lg">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Return Home
                    </Button>

                    <div className="mt-8 text-gray-500 text-sm">
                        <p>Error Code: 404 | Page Not Found</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}