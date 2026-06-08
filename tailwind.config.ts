import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0d631b',
        'on-primary': '#ffffff',
        'primary-container': '#2e7d32',
        'on-primary-container': '#cbffc2',
        'primary-fixed': '#a3f69c',
        'on-primary-fixed': '#002204',
        'on-primary-fixed-variant': '#005312',
        secondary: '#525f71',
        'on-secondary': '#ffffff',
        'secondary-container': '#d3e1f6',
        'on-secondary-container': '#566475',
        tertiary: '#1d622b',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#387b41',
        'on-tertiary-container': '#c7ffc5',
        surface: '#f8f9fa',
        'on-surface': '#191c1d',
        'on-surface-variant': '#40493d',
        'surface-container-low': '#f3f4f5',
        'surface-container': '#edeeef',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#e7e8e9',
        'outline-variant': '#bfcaba',
        outline: '#707a6c',
        navy: '#0d1b2a',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'margin-desktop': '48px',
        'margin-mobile': '16px',
        gutter: '24px',
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-bold': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-down': 'slide-down 0.35s ease forwards',
        'scale-in': 'scale-in 0.55s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
