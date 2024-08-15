/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        reversPing: "reversPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        reversPing: {
          "100%": { transform: "scale(2)", opacity: "0" },
          "25%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
