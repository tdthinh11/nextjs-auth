/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        grey: '0 3px 6px rgba(0,0,0,0.04)',
        'small-shadow': '0 1px 1px rgba(0,0,0,0.04)',
        'full-shadow': '0px 0px 2px 2px rgba(0,0,0,0.04)'
      },
      width: {
        'post-page': '550px'
      },
      colors: {
        'btn-primary': '#1A6ED8'
      }
    },
  },
  plugins: [],
}
