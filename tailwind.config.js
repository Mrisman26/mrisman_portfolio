module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}', // Pastikan folder sumber Anda sudah dicakup
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
        orange: '#ea580c',
        green: '#25D366',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
