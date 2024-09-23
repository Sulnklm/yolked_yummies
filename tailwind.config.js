/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alegreya Sans SC"', 'sans-serif'],
        lato: ['"Lato"'],
      },
      colors: {
        'white-rgba': 'rgba(255,255,255,0.5)',
      },
    },
  },
  
  plugins: [],

}

