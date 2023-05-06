/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/Context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { adminNavbarColor: "#f0f0f0" },
  },
  plugins: [],
};
