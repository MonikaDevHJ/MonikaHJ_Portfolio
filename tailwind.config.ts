import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-slow': 'fadeIn 2s ease-out',
        'slide-left': 'slideLeft 1s ease-out',
        'slide-right': 'slideRight 1s ease-out',
        'zoom-in': 'zoomIn 0.8s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'typing': 'typing 6s steps(40) infinite, blink 1.5s step-end infinite', // Adjusted steps
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
