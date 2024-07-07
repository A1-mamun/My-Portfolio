/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'txt-color': '#E3C998',
      'hover-color': '#DCD2BF'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

