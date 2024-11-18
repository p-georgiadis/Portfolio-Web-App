// Update tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px)',
            opacity: '0'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            transform: 'translateY(-30px)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

