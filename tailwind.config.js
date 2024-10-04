/** @type {import('tailwindcss').Config} */
export default {
   content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'avatar-border': 'rgba(255, 255, 255, 0.19)',
        'gray': '#F2F1F6',
        'purple': '#7065EF'
      }
    },
  },
  plugins: [],
}

