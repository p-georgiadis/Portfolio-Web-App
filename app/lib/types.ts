// app/lib/types.ts
export type ProjectCategory =
    'Cloud & Infrastructure' |
    'Machine Learning & AI' |
    'Software Engineering' |
    'Open Source';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    infrastructure: string[];
    techDetails: {
        [key: string]: string[];  // This allows any string key with string array values
    };
    link?: string;
    videoDemo?: string;
    isOpenSource?: boolean;
    featured?: boolean;
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    details: string[];
    logo?: string;
}
