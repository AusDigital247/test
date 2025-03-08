/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3DD2F0',
        secondary: '#5D9EF0',
        background: '#0B0F17',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};