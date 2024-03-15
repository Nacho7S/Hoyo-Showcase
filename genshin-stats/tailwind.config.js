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
        "ui-avatar-genshin": "url('/assets/menuCharacter.png')",
        "ui-namecard-genshin": "url('/assets/nameCardMenu.png')",
        "switch-button-avatar-genshin": "url('/assets/buttonSwitchesBanner.png')",
        "banner-level-character": "url('/assets/lvl_banner.png')",
      },
      colors: {
        'ui-white-genshin': 'rgba(239,235,226,255)',
        'icon-image-background': 'rgba(211,173,139,255)',
        'icon-border-color': 'rgba(209,192,153,255)',
        'font-color-bio-button': 'rgba(134,119,101,255)',
        'b5-background-character-light': 'rgba(207,139,64,255)',
        'b5-background-character-dark': 'rgba(175,125,74,255)',
        'b4-background-character-light': 'rgba(154,131,189,255)',
        'b4-background-character-dark': 'rgba(131,118,166,255)',
      },
      fontFamily: {
        'genshin': ["var(--font-genshin)"]
      }
    },
  },
  plugins: [require('daisyui')],
};
