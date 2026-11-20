/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Jua', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
      colors:{
        primary:{
          900:"#6E8898"
        },
        secondary:{
          900:"#9FB1BC"
        },
        accent:{
          900:"#2E5266"
        }
      }
    },
  },
  plugins: [],
}