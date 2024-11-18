import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { Particles } from './components/ui/Particles'
import React, { Suspense } from "react"
import { ScrollToTop } from "@/app/components/ui/ScrollToTop"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const viewport: Viewport = {
    themeColor: "#ffffff",
}

export const metadata: Metadata = {
    title: "Pano Georgiadis - Cloud Engineer",
    description: "Portfolio showcasing cloud engineering expertise",
    icons: {
        icon: [
            { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/icons/favicon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/icons/favicon.ico",
        apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/icons/site.webmanifest",
    appleWebApp: {
        title: "Pano",
    },
    other: {
        "msapplication-TileColor": "#ffffff",
        "msapplication-config": "/icons/browserconfig.xml",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-100`}>
        <Suspense fallback={null}>
            <Particles />
        </Suspense>
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        <ScrollToTop />
        </body>
        </html>
    )
}