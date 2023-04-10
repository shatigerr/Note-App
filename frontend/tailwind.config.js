/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#F2C2D4',
        'btn': '#D7D0FF',
        'newNotebg':"#F4E1BB",
        'letter': '#1D7874'
      }
    },
  },
  plugins: [],
}

