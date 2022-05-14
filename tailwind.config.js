module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px'
    },
    extend: {
      colors: { 
        'neutral-off-white': '#efefef', 
        'rose-red': '#db2b39', 
        'navy-blue': '#29335c', 
        'primary': '#ffcf99',
        'primary-light': '#FFE1BE', 
        'neutral-off-black': '#1C211E'
      }
    },
  },
  plugins: [],
}