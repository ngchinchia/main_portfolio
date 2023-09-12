/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '500px',
      lg: '600px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar'),],
}