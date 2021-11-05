export default {
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2'
        },
        'blue-main': {
          800: '#0d1131',
          900: '#070919',
        },
      },
    },
  },
  darkMode: 'class',
}
