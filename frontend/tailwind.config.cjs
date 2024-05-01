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
        calendar: {
          green: "#009A4E",
          red: "#F26854",
          brown: "#9A7E5A",
          yellow: "#EC9B40",
          purple: "#A27996",
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
