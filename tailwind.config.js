/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '25em',
      },
      maxWidth: {
        card: '21.875rem',
      },
      fontFamily: {
        primary: ['Outfit', 'sans-serif']
      },
      fontSize: {
        h1: '1.3125rem',
      },
      spacing: {
        15: '3.875rem',
      },
      colors: {
        primary: 'hsl(215, 51%, 70%)',
        accent: 'hsl(178, 100%, 50%)',
        body: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
}
