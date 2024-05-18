/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#CDE8E5",
        secondary: "#EEF7FF",
        greenPrimary: "#7AB2B2",
        bluePrimary: "#4D869C"
      }
    },
  },
  plugins: [],
}