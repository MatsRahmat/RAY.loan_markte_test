/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ABEF",
        "primary-surface": "#E5F8FF",
        "primary-dark-700": "#006E99",
        disabled: "#B3B3B3",
        "disabled-2": "#F2F2F2",
        "danger-700": "#990021",
      },
    },
  },
  plugins: [],
};
