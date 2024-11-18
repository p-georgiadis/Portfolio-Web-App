// components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/app/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-[#111]/80 backdrop-blur-sm border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <p className="text-gray-400 font-medium">
                            © {new Date().getFullYear()} Pano Georgiadis
                        </p>
                        <p className="text-gray-500 text-sm">
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                        </a>

                        <a
                            href={SITE_CONFIG.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                        </a>

                        <a
                            href={SITE_CONFIG.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
