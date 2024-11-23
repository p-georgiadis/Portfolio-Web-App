// app/(routes)/contact/page.tsx
'use client'

import { Button } from '@/app/components/ui/Button';
import { Section } from '@/app/components/ui/Section';
import { Card } from '@/app/components/ui/Card';
import { SITE_CONFIG } from '@/app/lib/constants';
import {
    Github,
    Linkedin,
    Mail,
    Clock
} from 'lucide-react';
import { PageWrapper } from "@/app/components/ui/PageWrapper";
import {AnimatedLogo} from "@/app/components/ui/AnimatedLogo";

export default function Contact() {
    return (
        <PageWrapper>
            <Section
                title="Let's Connect"
                description="Feel free to reach out for collaborations or just to say hi."
                className="mt-8 sm:mt-6"
            >
                <div className="space-y-8">
                    <Card
                        title={
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </div>
                        }
                        description={`You can reach me at ${SITE_CONFIG.email}`}
                        className="hover:bg-gray-800/50 transition-all hover:-translate-y-1 hover:border-gray-700"
                    >
                        <div className="flex justify-start mt-4">
                            <a
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="inline-block"
                            >
                                <Button variant="outline" size="lg">
                                    Send Email
                                </Button>
                            </a>
                        </div>
                    </Card>

                    <Card
                        title="Social"
                        description="Follow me on GitHub and LinkedIn for updates and projects."
                        className="hover:bg-gray-800/50 transition-all hover:-translate-y-1 hover:border-gray-700"
                    >
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Button
                                href={SITE_CONFIG.github}
                                variant="outline"
                                size="lg"
                                target="_blank" // Open in a new tab
                                rel="noopener noreferrer" // Security best practice
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </Button>
                            <Button
                                href={SITE_CONFIG.linkedin}
                                variant="outline"
                                size="lg"
                                target="_blank" // Open in a new tab
                                rel="noopener noreferrer" // Security best practice
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </Button>
                        </div>
                    </Card>

                    <Card
                        title={
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>Quick Response</span>
                            </div>
                        }
                        description="I typically respond within 24 hours. For urgent matters, please reach out via LinkedIn."
                        className="hover:bg-gray-800/50 transition-all hover:-translate-y-1 hover:border-gray-700"
                    />
                </div>
            </Section>
            <AnimatedLogo/>
        </PageWrapper>
    );
}
