module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        spinSlow: "spinSlow 6s linear infinite",
        spinReverse: "spinReverse 6s linear infinite",
        spinScale: "spinScale 6s ease-in-out infinite",
        spin3d: "spin3d 6s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        spinScale: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        spin3d: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
};
