/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#00004c',
        accent: {
          DEFAULT: '#00b7c2',
          2: '#00ffc2',
          dark: '#000073',
        },
        surface: '#f2f5f7',
        bg: '#e7eaee',
      },
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
