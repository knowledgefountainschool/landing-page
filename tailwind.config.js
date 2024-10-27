/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        'san-francisco': ['SF-Pro-Text', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        'berlingske-serif': ['BerlingskeSerif', 'sans-serif'],
      },
      backgroundImage: {
        'brand-dark-gradient': 'linear-gradient(135deg, #b3c5d5, #2b2f46)',
      },
      colors: {
        brand: '#b3c5d5',
        light: '#F1F3ED',
        lighter: '#FFFFFF',
        dark: '#6c788c',
        darker: '#2b2f46',
        page: '#c19f76',
        book: '#5a3629',
        success: '#45BA45',
        pending: '#7FE8FF',
        error: '#FF5B5B',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'slide-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'slide-to-right': 'slide-to-right 1.5s infinite ease-in-out',
        shimmer: 'shimmer 3s linear infinite',
        move: 'move 5s linear infinite',
        subtlePulse: 'subtlePulse 2s infinite ease-in-out',
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
      },
    },
    screens: {
      '3xs': '320px',
      '2xs': '360px',
      xs: '480px',
      sm: '642px',
      md: '768px',
      lg: '1024px',
      xl: '1283px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
