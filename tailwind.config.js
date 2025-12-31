/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "spin-reverse 12s linear infinite",
        orbit: "orbit 6s linear infinite",
        "orbit-reverse": "orbit-reverse 6s linear infinite",
      },

      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },

        orbit: {
          "0%": { transform: "rotate(0deg) translateX(60px)" },
          "100%": { transform: "rotate(360deg) translateX(60px)" },
        },

        "orbit-reverse": {
          "0%": { transform: "rotate(360deg) translateX(60px)" },
          "100%": { transform: "rotate(0deg) translateX(60px)" },
        },
      },
    },
  },

  plugins: [],
};
