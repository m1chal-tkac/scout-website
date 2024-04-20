/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3979B5",
          200: "#255C9E",
          300: "#294885",
        },
      },
      fontFamily: {
        sans: "themix, sans-serif",
        skautbold: "skautbold, sans-serif",
      },
    },
  },
  plugins: [],
};
