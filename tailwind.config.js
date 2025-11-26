/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Tajawal", "Cairo", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    borderRadius: {
      '2xl': '1rem',
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
