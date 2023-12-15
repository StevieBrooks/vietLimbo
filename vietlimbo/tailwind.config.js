/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#2BA84A",
      "secondary": "#248232",
      "jetblack": "#040F0F",
      "secblack": "#2D3A3A",
      "white": "#FCFFFC"
    },
    screens: {
      "phone": "400px",
      "tablet": "700px",
    }
  },
  plugins: [],
}