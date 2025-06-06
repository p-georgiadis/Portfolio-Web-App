// app/(routes)/about/page.tsx
"use client"; // Required for client-side rendering and hooks

import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from '@/app/components/ui/Button';
import {
    CLOUD_CERTS,
    COMPTIA_CERTS,
    EDUCATION,
    EXPERIENCES,
    LINUX_FOUNDATION_CERTS,
    OTHER_CERTS,
    SKILLS
} from '@/app/lib/constants';
import Image from 'next/image';
import { CertificationCard } from "@/app/components/ui/CertificationCard";
import { Section } from "@/app/components/ui/Section";
import { PageWrapper } from "@/app/components/ui/PageWrapper";
import { EducationCard } from "@/app/components/ui/EducationCard";
import { ExperienceCard } from "@/app/components/ui/ExperienceCard";

export default function About() {
    const { scrollYProgress } = useScroll();
    // Utility function to format the section titles
    const formatTitle = (title: string) => {
        return title
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
    };
    return (
        <PageWrapper>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
            />

            <Section
                title="About Me"
                className="mt-8 sm:mt-6"
            >
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative">
                        <Image
                            src="/images/profile.png"
                            alt="Profile"
                            width={192}
                            height={192}
                            className="rounded-2xl ring-2 ring-purple-500/20 shadow-lg shadow-purple-500/10"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-normal overflow-visible pb-1">
                            Cloud Engineer & DevOps Specialist<br/>Proven Infrastructure & Systems Expert
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Recently graduated Cloud Engineer and DevOps specialist with 6+ years building scalable
                            infrastructure solutions
                            as the sole IT professional for a growing business. I hold an MS in Computer Science from
                            University of Colorado
                            Boulder (4.0 GPA, May 2025) along with a graduate certificate in Artificial Intelligence and 20+ technical certifications including AWS Solutions
                            Architect, CKA, LFCS,
                            and Microsoft Azure Administrator. Now seeking to leverage my comprehensive technical
                            background and proven
                            problem-solving abilities in a larger enterprise environment.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            My expertise spans <strong className="text-purple-400">cloud infrastructure &
                            DevOps</strong> (AWS, Azure, Kubernetes, Docker, Terraform),
                            <strong className="text-purple-400">CI/CD automation</strong> (GitHub Actions, ArgoCD), and
                            <strong className="text-purple-400">AI/ML integration</strong> (deep learning, NLP, computer
                            vision). I have delivered measurable business impact including 90% cost reduction through cloud
                            migration, 99.9% uptime for critical systems, and hybrid cloud architectures that maintained operations
                            through major outages.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Beyond traditional cloud engineering, I deploy innovative ML solutions including CNNs for
                            medical imaging,
                            AI-driven financial models, and automated infrastructure workflows. My military
                            communications background
                            brings mission-critical reliability standards and exceptional performance under
                            pressure—experience with
                            24/7 operations.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            As a CompTIA Network of Experts member, I contribute to advancing industry certification
                            standards.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button href="/Pano Georgiadis Résumé.pdf" download>Résumé</Button>
                            <Button href="/contact" variant="outline">Contact Me</Button>
                        </div>
                    </div>

                </div>
            </Section>

            <Section title="Education">
                <div className="space-y-12">
                    {EDUCATION.map((edu, index) => (
                        <EducationCard
                            key={index}
                            logo={edu.logo}
                            institution={edu.institution}
                            degree={edu.degree}
                            duration={edu.duration}
                            gpa={edu.gpa}
                            specializations={edu.specializations}
                            aiCertificate={edu.aiCertificate}
                            details={edu.details}
                        />
                    ))}
                </div>
            </Section>

            <Section title="Certifications">
                {/* Cloud & DevOps Certifications */}
                <div className="space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">Cloud & DevOps</h3>
                    <div className="grid grid-cols-3 gap-2 md:flex md:overflow-x-auto md:space-x-4 py-4">
                        {CLOUD_CERTS.map((cert) => (
                            <CertificationCard
                                key={cert.name}
                                imageSrc={cert.imageSrc}
                                name={cert.name}
                                issuer={cert.issuer}
                                link={cert.link}
                            />
                        ))}
                    </div>
                </div>

                {/* CompTIA Certifications */}
                <div className="space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">CompTIA</h3>
                    <div className="grid grid-cols-3 gap-2 md:flex md:overflow-x-auto md:space-x-4 py-4">
                        {COMPTIA_CERTS.filter(cert => !cert.stackable).map((cert) => (
                            <CertificationCard
                                key={cert.name}
                                imageSrc={cert.imageSrc}
                                name={cert.name}
                                issuer={cert.issuer}
                                link={cert.link}
                            />
                        ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">CompTIA Stackable Certifications</h3>
                    <div className="grid grid-cols-3 gap-2 md:flex md:overflow-x-auto md:space-x-4 py-4">
                        {COMPTIA_CERTS.filter(cert => cert.stackable).map((cert) => (
                            <CertificationCard
                                key={cert.name}
                                imageSrc={cert.imageSrc}
                                name={cert.name}
                                issuer={cert.issuer}
                                link={cert.link}
                            />
                        ))}
                    </div>
                </div>

                {/* Linux Foundation and Additional Certifications */}
                <div className="space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">The Linux Foundation</h3>
                    <div className="grid grid-cols-3 gap-2 md:flex md:overflow-x-auto md:space-x-4 py-4">
                        {LINUX_FOUNDATION_CERTS.map((cert) => (
                            <CertificationCard
                                key={cert.name}
                                imageSrc={cert.imageSrc}
                                name={cert.name}
                                issuer={cert.issuer}
                                link={cert.link}
                            />
                        ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">Additional Certifications</h3>
                    <div className="grid grid-cols-3 gap-2 md:flex md:overflow-x-auto md:space-x-4 py-4">
                        {OTHER_CERTS.map((cert) => (
                            <CertificationCard
                                key={cert.name}
                                imageSrc={cert.imageSrc}
                                name={cert.name}
                                issuer={cert.issuer}
                                link={cert.link}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <Section title="Experience">
                <div className="space-y-12">
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            title={experience.title}
                            company={experience.company}
                            duration={experience.duration}
                            details={experience.details}
                        />
                    ))}
                </div>
            </Section>

            <Section title="Skills">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(SKILLS).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                            {/* Use the formatTitle function to display category titles */}
                            <h3 className="text-lg md:text-xl font-semibold capitalize text-gray-300">
                                {formatTitle(category)}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm
                            hover:bg-purple-500/80 transition-colors"
                                    >
                            {skill}
                        </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

        </PageWrapper>
    );
}
