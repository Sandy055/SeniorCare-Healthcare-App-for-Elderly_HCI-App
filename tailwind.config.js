/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        anton: ["Anton","sans-serif"]
      },
      colors:{
        myblue : "#6414db"
      }
    },
  },
  plugins: [],
}