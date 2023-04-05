import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 4s linear infinite",
        "spin-reverse-slow": "spin-reverse 5s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },

      keyframes: {
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
} satisfies Config;
