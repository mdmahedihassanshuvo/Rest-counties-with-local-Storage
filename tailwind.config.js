/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#806be5",

          "secondary": "#edc180",

          "accent": "#5ee5c8",

          "neutral": "#2C283E",

          "base-100": "#FFFFFF",

          "info": "#9BACF8",

          "success": "#1BA16C",

          "warning": "#EECF44",

          "error": "#F22318",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
