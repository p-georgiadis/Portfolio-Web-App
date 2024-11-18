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
    infrastructure?: string[];
    techDetails?: {
        [key: string]: string[];
    };
    link?: string;
    isOpenSource?: boolean;
}