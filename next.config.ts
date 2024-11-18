import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Enable static export for S3 hosting
    output: 'export',

    // Handle remote images (external images won't work with static exports)
    images: {
        unoptimized: true, // Disable Next.js image optimization for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.credly.com',
                port: '',
                pathname: '/size/340x340/images/**',
            },
        ],
    },

    // Optional: Adjust basePath if deploying to a subdirectory
    basePath: '',

    // Optional: Enable trailing slash for S3 compatibility
    trailingSlash: true, // Ensures all paths end with a slash (e.g., /about/)

    // Performance optimizations
    experimental: {
        optimizeCss: true,
        webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
        // Note: optimizeImages is not included since we're using unoptimized: true for static export
    },

    // Additional performance configurations
    reactStrictMode: true,
    poweredByHeader: false, // Remove X-Powered-By header for security
    compress: true, // Enable compression

    // Configure headers for better performance and security
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
