/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        "Light-gray": "hsl(212, 45%, 89%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Dark-blue": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
