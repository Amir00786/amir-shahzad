// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.5s ease-in-out forwards",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
    },
  };
  