// app/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combine Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Format date to locale string
export function formatDate(date: string | Date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
    })
}

// Sort projects by date
export function sortByDate<T extends { date: string | Date }>(items: T[]): T[] {
    return items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

// Generate tag colors based on string
export function getTagColor(tag: string): string {
    const colors = [
        'bg-blue-100 text-blue-800',
        'bg-green-100 text-green-800',
        'bg-purple-100 text-purple-800',
        'bg-yellow-100 text-yellow-800',
        'bg-red-100 text-red-800',
    ]
    const hash = tag.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
    return colors[hash % colors.length]
}
