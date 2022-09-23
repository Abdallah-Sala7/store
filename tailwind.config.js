/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: "#e3ffe6"
        },
        discover:{
          100: "#fef2f2",
          200: "#fefce8",
          300: "#eff6ff",
          400: "#f0fdf4",
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
  plugins: [require('flowbite/plugin'),
            require('@tailwindcss/line-clamp'),],
}