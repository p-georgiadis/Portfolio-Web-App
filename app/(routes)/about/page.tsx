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
            .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize each word
            .replace(/\bDevops\b/g, 'DevOps') // Fix DevOps
            .replace(/\bCicd\b/g, 'CI/CD') // Fix CI/CD
            .replace(/\bSre\b/g, 'SRE') // Fix SRE
            .replace(/\bAi\b/g, 'AI') // Fix AI
            .replace(/\bAnd\b/g, '&'); // Replace And with &
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
                            Cloud DevOps Engineer | Fortune 500<br/>Multi-Cloud Architecture & Security Expert
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Cloud DevOps Engineer at The Hanover Insurance Group (Fortune 500) driving enterprise transformation through security-hardened multi-cloud architecture. With 4+ years of experience and an MS in Computer Science from University of Colorado Boulder (4.0 GPA), I specialize in architecting zero-trust infrastructure, achieving regulatory compliance, and delivering extraordinary business value through intelligent automation.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            <strong className="text-purple-400">Recent Achievement:</strong> Independently architected and deployed comprehensive Oracle Cloud Infrastructure foundation from zero institutional knowledge in just 4 weeks—delivering what typically requires 5-8 enterprise team members over 4-6 months. Achieved 100% CIS benchmark compliance with 73+ Terraform-managed resources, 11 security zones, QRADAR SIEM integration, and 30+ automated security controls, saving over $500,000 versus traditional enterprise approach.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            My expertise spans <strong className="text-purple-400">multi-cloud platforms</strong> (AWS, Azure, OCI), <strong className="text-purple-400">security & compliance</strong> (CIS benchmarks, zero-trust, Cloud Guard, Security Zones), <strong className="text-purple-400">Infrastructure as Code</strong> (Terraform, CloudFormation, ARM/Bicep), and <strong className="text-purple-400">enterprise DevOps</strong> (Azure DevOps, GitHub Actions, ArgoCD, CI/CD pipelines). I hold 36+ certifications including Azure DevOps Engineer Expert, AWS Solutions Architect, OCI Architect Associate, CKA, and earned CompTIA Network of Experts recognition.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Previously, I architected AWS infrastructure, Kubernetes deployments, and hybrid cloud solutions as the sole IT professional for a growing organization—achieving 90% cost reduction through cloud migration and 99.9% uptime for critical systems. My military communications background as a Signals Corps Specialist brings mission-critical reliability standards with proven 24/7 operations and emergency response capabilities under pressure.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            As a CompTIA Network of Experts member and holder of an Artificial Intelligence Graduate Certificate, I continuously advance cloud security, compliance automation, and enterprise infrastructure excellence—bridging traditional DevOps practices with emerging AI/ML technologies and modern security frameworks.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button href="/Pano%20Georgiadis%20Resume.pdf" download>Résumé</Button>
                            <Button href="/contact" variant="outline">Contact Me</Button>
                        </div>
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
                            logo={experience.logo}
                        />
                    ))}
                </div>
            </Section>

            <Section title="Certifications">
                {/* Cloud & DevOps Certifications */}
                <div className="space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200">Cloud & DevOps</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
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
                            mastersDiploma={edu.mastersDiploma}
                            aiCertificateImage={edu.aiCertificateImage}
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
