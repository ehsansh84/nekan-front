module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          backgroundColor: {
              'primary': {
                  800: '#4B56C0',
                  900: '#3D45A7'
              },
              'secondary': {
                  800: '#FDC413',
                  900: '#e4af12'
              }
          }
      },
  },
  plugins: [
      require('flowbite/plugin')
  ]
};

