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
        // primaryColor: "#fe7560",
        primaryColor: "#6e57e0",
        headingColor: "#081e21",
        smallTextColor: "#6d6a7c",
        primaryBg: "#fbfbfe",
        inputColor: "#f0eefc",
        primaryDarkColor: "#191627",
        headingDarkColor: "#f2f1f3",
        smallTextDarkColor: "#bcbac4",
        inputDarkColor: "#211d35",
      },
      height: {
        headerHeight: "80px",
      },
      animation: {
        bounce: "bounce 2s infinite",
        "bounce-webkit": "bounce 2s infinite",
        slideFromRight: "slideFromRight 0.3s forwards",
        "slideFromRight-webkit": "slideFromRight 0.3 forwards",
      },
      // fontSize: {

      // }
    },
  },
  plugins: [],
};
