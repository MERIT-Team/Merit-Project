/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        'light-beige': '#EAE7DC',
        'beige': '#D8C3A5',
        'dark-grey': '#8E8D8A',
        'light-red': '#E98074',
        'bright-red': '#E85A4F',
      },
      backgroundColor: {
        'light-beige': '#EAE7DC',
      },
      textColor: {
        'dark-grey': '#8E8D8A',
      },
      borderColor: {
        'beige': '#D8C3A5',
        'light-red': '#E98074',
      },
      hover: {
        'beige': '#D8C3A5',
        'light-red': '#E98074',
      },
    },
  },
  variants: {},
  plugins: [],
}
