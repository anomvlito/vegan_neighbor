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
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
}
export default config
