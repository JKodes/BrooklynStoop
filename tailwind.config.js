/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['Madimi One', 'cursive'],
        ruda: ['Ruda', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

