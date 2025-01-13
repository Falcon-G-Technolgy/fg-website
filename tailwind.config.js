/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { max: '639px' },
        'tablet': { min: '640px', max: '1023px' },
        'desktop': { min: '1024px' },
      },
      colors: {
        'main-yellow': '#FFBC41',
        'main-blue': '#37517E',
        'main-white': '#FFFEFE',
        'main-black': '#23272B',
        'secondary-yellow': '#FBA200'
      }
    },
  },
  plugins: [],
}

