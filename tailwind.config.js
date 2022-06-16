module.exports = {
  content: ['./src/**/*.{html,js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        lg: '1.5rem',
        xl: '2rem',
        '1xl': "'2.5rem",
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '4.5rem',
      },
      borderRadius: {
        xl: '4rem',
      },
      minWidth: {
        '1/2': '45%',
      },
      screens: {
        phone: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        laptop: { min: '1024px', max: '1279px' },
        desktop: { min: '1280px', max: '1535px' },
        desktopxl: { min: '1536px' },
      },
      colors: {
        ajb: {
          primary: '#143650',
          black: '#212429',
          white: '#FFFFFF',
          yellow: '#f8d355',
          tosca: '#00c4d2',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
};
