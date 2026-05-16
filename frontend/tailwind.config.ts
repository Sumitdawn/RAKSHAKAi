import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        army: {
          900: '#10120f',
          800: '#1c2218',
          700: '#2b3325',
          600: '#3e4c35',
          500: '#4b5320',
          400: '#7b8b4a',
          300: '#b8bc92',
          200: '#e1dcbf',
        },
        saffron: '#ff6d00',
        khaki: '#c8bda3',
        glow: '#8cffdc',
      },
      boxShadow: {
        hud: '0 0 40px rgba(74, 154, 83, 0.12), 0 0 90px rgba(41, 92, 28, 0.12)',
      },
      backgroundImage: {
        'radar-grid': 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 54%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
