/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: "#e3ffe6"
        }
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        outline: "inset 0 0 1px 2px rgba(0, 0, 0, 1)"
      }
    },
  },
  plugins: [],
}