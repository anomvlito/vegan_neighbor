// v2 - cache bust
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vn-black': '#000000',
        'vn-white': '#FFFFFF',
        'vn-natural': '#F5E6D3',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '48px'],
        '6xl': ['60px', '60px'],
      },
      spacing: {
        'vn-xs': '4px',
        'vn-sm': '8px',
        'vn-md': '16px',
        'vn-lg': '24px',
        'vn-xl': '32px',
        'vn-2xl': '48px',
        'vn-3xl': '64px',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
      },
      keyframes: {
        'splash-exit': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'splash-exit': 'splash-exit 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scale-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
export default config
