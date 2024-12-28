/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle,#0c1a38,#000008,#07010a)',
      },
      screens: {
        'xs': '300px', // Custom breakpoint for very small screens

      },
     
    },
  },
  plugins: [],
}

