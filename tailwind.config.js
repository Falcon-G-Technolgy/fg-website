/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '230px', // Très petit téléphone
        'xs': '300px', // Smartphone classique ou un peu grand
        'tablet': '768px', // Tablette
        'desktop': '1024px', // Ordinateur
      },
    },
  },
  plugins: [],
}

