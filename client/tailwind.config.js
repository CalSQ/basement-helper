/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'primary-background': '#151517',
      'secondary-background': '#111113',
      'primary-text': '#A6A6A6',
      'secondary-text': '#454545',
      'primary-accent': '#63809B',
      'primary-block': '#0C0C0D',
      required: '#462C2C',
    },
    fontFamily: {
      sans: ['DM Sans'],
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      'square-sm': '20px 20px',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-grid':
        'linear-gradient(to right,#131315 1px, transparent 1px), linear-gradient(to bottom, #131315 1px, transparent 1px);',
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-1': 'fade-in 500ms forwards',
        'fade-in-2': 'fade-in 1s forwards',
        'fade-in-3': 'fade-in 1.5s forwards',
      },
    },
  },
  plugins: [],
};
