/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#ffff44", 
          500: "#ffcc00", 
        },
        secondary: {
          400: "#44ccff", 
          500: "#0099cc",
        },
      },
    },
  },
  plugins: [],
};
