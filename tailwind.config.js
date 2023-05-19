/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
    },
    colors: {
      blue: "#1E45FF",
    },
    fontWeight: {
      simple: "300",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
  ],
};

