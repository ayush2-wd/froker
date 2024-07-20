/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      spacing: {
        '36vh': '36vh',
      },
      colors: {
        'orange-500': '#FD7A33',
        'gray-800': '#333',
        'gray-500': '#666',
        'gray-700': '#1A1A1A',
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      },
      fontSize: {
        '32px': '32px',
        '24px': '24px',
        '48px': '48px',
        'clamp-36px': 'clamp(40px, 6vw, 44px)', 
        'clamp-1rem': 'clamp(1.2rem, 2.2vw, 1.2rem)', 
        'clamp-2rem': 'clamp(1.2rem, 2.2vw, 2.2rem)',
        'clamp-1.2rem': 'clamp(1.4rem, 2.5vw, 1.4rem)', 
        'clamp-1rem': 'clamp(1.2rem, 2.5vw, 1.2rem)',
      },
      lineHeight: {
        '30px': '30px',
      },
      spacing: {
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
      },
      },
    },
  plugins: [
    require('daisyui'),
  ],
}

