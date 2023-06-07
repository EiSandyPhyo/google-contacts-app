/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter"],
  },
  theme: {
    extend: {
      boxShadow: {
        '3xl' : 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 0 0',
      },
      width: {
        '6/7': '93.3%',
        '1/7': '5.7%',
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  
}