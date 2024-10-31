/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homepage_bg':"url('./components/images/homepage_image.jpg')",
        'home_display':"url('./components/images/attracter1.jpg')",
      }
    },
  },
  plugins: [],
}

