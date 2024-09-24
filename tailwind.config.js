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
      
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      fontSize: {
        'h1-xs': ['1.8rem', { lineHeight: '2rem' }], 
        'h1-sm': ['2rem', { lineHeight: '2rem' }], 
        'h1-md': ['2.5rem', { lineHeight: '2.25rem' }], 
        'h1-lg': ['4rem', { lineHeight: '2.5rem' }], 

        'h2-xs': ['1.2rem', { lineHeight: '1.8rem'}],
        'h2-sm': ['1.8rem', { lineHeight: '1.8rem'}],
        'h2-md': ['1.9rem', { lineHeight: '2.2rem'}],
        'h2-lg': ['2rem', { lineHeight: '2.5rem'}],

        'h3-xs': ['1.2rem', { lineHeight: 'rem'}],
        'h3-sm': ['1.6rem', { lineHeight: 'rem'}],
        'h3-md': ['1.8rem', { lineHeight: 'rem'}],
        'h3-lg': ['2rem', { lineHeight: 'rem'}],

        'h4-xs': ['0.9rem', { lineHeight: 'rem'}],
        'h4-sm': ['1.1rem', { lineHeight: 'rem'}],
        'h4-md': ['1.4rem', { lineHeight: 'rem'}],
        'h4-lg': ['1.6rem', { lineHeight: '2rem'}],

        'h5-xs': ['0.9rem', { lineHeight: 'rem'}],
        'h5-sm': ['1.1rem', { lineHeight: 'rem'}],
        'h5-md': ['1.4rem', { lineHeight: 'rem'}],
        'h5-lg': ['1.6rem', { lineHeight: '2rem'}],

        'h6-xs': ['0.875rem', { lineHeight: 'rem'}],
        'h6-sm': ['0.9rem', { lineHeight: 'rem'}],
        'h6-md': ['1rem', { lineHeight: 'rem'}],
        'h6-lg': ['1.3rem', { lineHeight: 'rem'}],

        'p-xs': ['0.875rem', {lineHeight: '1rem' }],
        'p-sm': ['0.9rem', {lineHeight: '1rem' }],
        'p-md': ['1rem', {lineHeight: '1rem' }],
        'p-lg': ['1.3rem', {lineHeight: '1rem' }],

      },
    },
  },
  
  
  plugins: [],

}

