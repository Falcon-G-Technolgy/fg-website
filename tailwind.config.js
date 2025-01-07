/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': { 'max': '250px' }, // Très petit téléphone
        'xs': { 'max': '380px' }, // Smartphone classique ou un peu grand
        'tablet': { 'max': '768px' }, // Tablette
        'desktop': { 'max': '1024px' }, // Ordinateur
      },
      colors: {
        'main-yellow': '#FFBC41',
        'main-blue': '#37517E',
        'main-white': '#FFFEFE',
        'main-black': '#23272B'
      }
    },
  },
  plugins: [],
}

