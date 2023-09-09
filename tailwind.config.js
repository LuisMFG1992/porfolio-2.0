/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#242424',
        bgDarker: '#1a1a1a',
        primary: '#9333ea',
        primaryHover: '#7e22ce',
        secunday: '#ffff',
      },
      screens: {
        xs: '325px',
      },
    },
  },
  plugins: [],
}
