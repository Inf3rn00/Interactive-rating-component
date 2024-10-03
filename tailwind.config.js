/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(25, 97%, 53%)",
        "Dark-blue": "hsl(213, 19%, 18%)",
        "Light-grey": "hsl(217, 12%, 63%)",
        "Very-dark-blue" : "hsl(216, 12%, 8%)"
      },
      fontFamily: {
        "Overpass" : "Overpass"
      }
    },
  },
  plugins: [],
}