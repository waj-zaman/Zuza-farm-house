/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gabriela: ['Gabriela', 'serif'],
        kalnia: ['Kalnia', 'serif'],
        nowy: ['Poltawski Nowy', 'sans-serif'],
        aclonica: ['Aclonica', 'serif'],
        quicksand: ['Quicksand', 'serif']
      },
    },
  },
  plugins: [],
}
