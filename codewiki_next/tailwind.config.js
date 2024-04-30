const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/assets/background-pattern6.png')",
      },

      fontFamily: {
        righteous: ['var(--font-righteous)'],
        poppins: ['var(--font-poppins)'],
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },

        "dark": '#232A3C',
        "medium": "#293245",

        purple: {
          100: "#a273ff",
          200: "#935bff",
          300: "#8344ff",
          400: "#742cff",
          500: "#6415FF",
          600: "#5a13e6",
          700: "#5011cc",
          800: "#460fb3",
          900: "#3c0d99",
        },
        gray: {
          lightest: "#fff",
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        cyan: "#00e0b4",

        orange: {
          50: "#ff938d",
          100: "#ff8983",
          200: "#ff7f79",
          300: "#ff756f",
          400: "#f66b65",
          500: "#ec615b",
          600: "#e25751",
          700: "#d84d47",
          800: "#ce433d",
          900: "#c43933",
        },
      },
    },
  },
  plugins: [nextui()],
}
