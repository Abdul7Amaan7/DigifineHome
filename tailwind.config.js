/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'custom-light-blue': '#e6f0ff',
        'custom-btn' : '#146EF5',
        'custom-btn-hover' : '#191970',
        'custom-bg-div' : '#E8F3FF', 
        'primary-main': '#2563eb',
        'greyscale-main': '#1f2937',
        'greyscale-1': '#374151',
        'greyscale-2': '#4b5563',
        'greyscale-3': '#6b7280',
        'greyscale-5': '#e5e7eb',
        'blue-600': '#2563eb',
        'purple-600': '#7c3aed',
        'greyscale-white': '#ffffff',
      },
      boxShadow: {
        'custom': '-6px 15px 65px 2px rgba(0, 0, 0, 0.1)',
        'hard-normal': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'cta': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }, 
      fontFamily: {
        sans: ['Raleway', 'Arial', 'sans-serif'], // Replace with your font
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueereverse : 'marqueereverse 20s linear infinite',
        
      },
      keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },         // Start position of original logos
            '100%': { transform: 'translateX(-50%)' },    // Move original logos to the left
          },
          marqueereverse: {
            '0%': { transform: 'translateX(-50%)' },     
            '100%': { transform: 'translateX(0%)' },    
        },
    },
    spacing: {
     'spacing14': '3.5rem', // Add this line
        'spacing20': '5rem',
        'spacing40': '10rem',
        'spacing48': '12rem',
        'spacing24': '6rem',
        'spacing16': '4rem',
        'spacing8': '2rem',
        'spacing6': '1.5rem',
        'spacing4': '1rem',
        'spacing2': '0.5rem',
    },
    borderWidth: {
      '1': '1px',
    },
     },},
plugins: [],
};