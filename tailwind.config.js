/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#012255',
        'secondary': '#F4871F',
        'background': '#F5F6F7',
        'yellow-badge' : '#DE9C1C',
        'blue-principal': '#012255',
        'gray-primary': '#E6E6E6',
      },
      fontFamily: {
        'lilita': "lilita",
        'montserrat': "montserrat"
      },
      
    },
  },
  plugins: [],
};
