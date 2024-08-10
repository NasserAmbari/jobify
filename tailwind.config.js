const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.plugin()],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Work Sans",
    },
    // colors: {
    //   primary: "#216A80",
    //   "t-white": "#ffffff",
    //   "neon-pink": "#ff0099",
    //   "neon-blue": "#00ccff",
    //   "neon-green": "#39ff14",
    //   "neon-purple": "#d400d4",
    // },
  },
  // plugins: [require("flowbite/plugin")],
};
