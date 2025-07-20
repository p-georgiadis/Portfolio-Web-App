// lib/store.ts
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface Particle {
    id: number;
    x: number;
    y: number;
    delay: number;
}

interface ParticleStore {
    particles: Particle[];
    isVisible: boolean;
    setVisibility: (visible: boolean) => void;
    initializeParticles: () => void;
}

const generatePoints = (count: number): Particle[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 70 + Math.random() * 30,
        delay: Math.random() * 1.5, // Reduced max delay
    }));
};

export const useParticleStore = create<ParticleStore>()(
    subscribeWithSelector((set) => ({
        particles: [],
        isVisible: true,
        setVisibility: (visible: boolean) => set({ isVisible: visible }),
        initializeParticles: () => {
            set({ particles: generatePoints(30) }); // Reduced particle count
        },
    }))
);