// app/(routes)/projects/page.tsx
"use client"

import { useState } from 'react';
import {AnimatePresence, motion, useScroll} from 'framer-motion';
import { Section } from '@/app/components/ui/Section';
import { Card } from '@/app/components/ui/Card';
import { ExpandedCard } from '@/app/components/ui/CardExpanded';
import { PROJECTS, PROJECT_CATEGORIES } from '@/app/lib/constants';
import { PageWrapper } from "@/app/components/ui/PageWrapper";
import {ProjectCategory} from "@/app/lib/types";

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedProject = PROJECTS.find(p => p.id === selectedId);

    // Group projects by category, excluding Open Source
    const projectsByCategory = PROJECTS.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {} as Record<ProjectCategory, typeof PROJECTS>);

    return (
        <PageWrapper>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
            />
            {/* Render all categories except Open Source first */}
            {Object.entries(PROJECT_CATEGORIES)
                .filter(([category]) => category !== 'Open Source')
                .map(([category, description], index) => (
                    <Section
                        key={category}
                        title={category}
                        description={description}
                        className={index === 0 ? "mt-8 sm:mt-6" : "pt-8 sm:pt-12"} // Only add margin to first section
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {projectsByCategory[category as ProjectCategory]?.map((project) => (
                                <Card
                                    key={project.id}
                                    {...project}
                                    onClickAction={() => setSelectedId(project.id)}
                                    className={`hover:bg-gray-800/50 transition-all hover:-translate-y-1 hover:border-gray-700 ${
                                        project.featured ? 'lg:col-span-2' : ''
                                    }`}
                                />
                            ))}
                        </div>
                    </Section>
                ))}

            <Section
                title="Open Source"
                description={PROJECT_CATEGORIES['Open Source']}
                className="pt-8 sm:pt-12"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsByCategory['Open Source']?.map((project) => (
                        <Card
                            key={project.id}
                            {...project}
                            onClickAction={() => setSelectedId(project.id)}
                            className={`hover:bg-gray-800/50 transition-all hover:-translate-y-1 hover:border-gray-700 ${
                                project.featured ? 'lg:col-span-2' : ''
                            }`}
                        />
                    ))}
                </div>
            </Section>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <ExpandedCard
                        {...selectedProject}
                        onCloseAction={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </PageWrapper>
    );
}
