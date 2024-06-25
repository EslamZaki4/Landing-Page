/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "51px",
      },
    },
    extend: {
      screens: {
        'custom': { 'min': '983px' },
        'custom2': { 'min': '1245px' },
      },
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#D6D6D6',
          500: '#CCCCCC',
          600: '#B3B3B3',
          700: '#999999',
          800: '#808080',
          900: '#666666',
        },
        secondary: {
          DEFAULT: '#FF6F28',
          50: '#FFE4D4',
          100: '#FFCAA9',
          200: '#FFAF7D',
          300: '#FF9551',
          400: '#FF7A26',
          500: '#FF6F28',
          600: '#E66121',
          700: '#CC531A',
          800: '#B34613',
          900: '#99380C',
        },
        title: {
          DEFAULT: '#000000',
          50: '#666666',
          100: '#4D4D4D',
          200: '#333333',
          300: '#1A1A1A',
          400: '#000000',
        },
      },
    },
  },
  plugins: [],
};
