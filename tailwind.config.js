/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-pic": "url('/public/images/heroImage.webp')",
      },
    },
  },
  plugins: [],
};
