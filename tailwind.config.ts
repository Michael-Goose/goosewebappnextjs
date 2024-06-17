import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'graph-black': ['Graph-Black', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      filter: {
        pink: 'brightness(0) saturate(100%) invert(74%) sepia(16%) saturate(7491%) hue-rotate(277deg) brightness(98%) contrast(101%)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>, options?: { variants: string[] }) => void }) {
      const newUtilities = {
        '.filter-pink': {
          filter: 'brightness(0) saturate(100%) invert(74%) sepia(16%) saturate(7491%) hue-rotate(277deg) brightness(98%) contrast(101%)',
        },
      };
      addUtilities(newUtilities, { variants: ['responsive', 'hover'] });
    }
  ],
};

export default config;
