/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ui-avatar-genshin": "url('/assets/menuCharacter.png')"
      },
      colors: {
        'ui-white-genshin': 'rgba(239,235,226,255)',
        'icon-image-background': 'rgba(211,173,139,255)',
        'icon-border-color': 'rgba(209,192,153,255)'
      },
      fontFamily: {
        'genshin': ["var(--font-genshin)"]
      }
    },
  },
  plugins: [require('daisyui')],
};
