/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fe7560",
        headingColor: "#242329",
        smallTextColor: "#6d6a7c",
        primaryBg: "#fbfbfe",
      },
      height: {
        headerHeight: "4.8rem",
      },
      animation: {
        bounce: "bounce 2s infinite",
        "bounce-webkit": "bounce 2s infinite",
      },
      // fontSize: {

      // }
    },
  },
  plugins: [],
};