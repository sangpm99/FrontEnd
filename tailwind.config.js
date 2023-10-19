/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login": "url('../../imgs/bg.png')",
        "logo": "url('../../imgs/logo.png')",
        "banner": "url('../../imgs/banner.png')",
      }
    },
  },
  plugins: [],
}
