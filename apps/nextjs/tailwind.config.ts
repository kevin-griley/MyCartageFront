import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },

      keyframes: {
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
} satisfies Config;
