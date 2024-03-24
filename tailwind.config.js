/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,php,js}",
    'node_modules/preline/src/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}