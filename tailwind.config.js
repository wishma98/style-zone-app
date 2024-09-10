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
      container: {
        center: true,
        padding: "2rem",
        maxWidth: "1400px", // Customize the maximum width here
      },
      backgroundImage: {
        overlay:
          "linear-gradient(360deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.213) 69.27%, rgba(0, 0, 0, 0) 100%)",
      },
      colors: {
        brand: {
          DEFAULT: "#191818",
          secondary: "#A68877",
          "primary-light": "#40353E",
          "primary-100": "#191818",
          "secondary-100": "#A68877",
          "secondary-light": "#FFF9E5",
          accent: "#8C5B3E",
          "accent-light": "#D9C5C1",
          background: "#FFFFFF",
          "background-2": "#F9FAFA",
        },
        grey: {
          100: "#111111",
          80: "#50555C",
          60: "#ADB3BC",
          40: "#D1D5DB",
          20: "#F0F3F6",
        },
      },
      margin: {
        "64px": "64px",
        "42px": "42px",
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "12px": "12px",
        "8px": "8px",
        "4px": "4px",
        "2px": "2px",
      },
      padding: {
        "64px": "64px",
        "42px": "42px",
        "32px": "32px",
        "24px": "24px",
        "16px": "16px",
        "12px": "12px",
        "8px": "8px",
        "4px": "4px",
        "2px": "2px",
      },
      borderRadius: {
        DEFAULT: "14px",
        sm: "5px",
        "md-x": "10px",
        md: "0.375rem",
        lg: "18px",
        full: "9999px",
        large: "12px",
        drop: "0 0 10px 10px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        "10px": ".625rem",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "24px": "24px",
        "28px": "28px",
        "40px": "40px",
      },
      fontFamily: {
        manrope: ["'Manrope', sans-serif"],
        cabin: ["'Cabin', sans-serif"],
        nunito: ["'Nunito Sans', sans-serif"],
      },
      animation: {
        reversPing: "reversPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      boxShadow: {
        custom: "0px 4px 8px 0px #CDCDCD40",
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
