module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
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
        'primary': '#fcab4e',
        'primary-light': '#fcc88d', 
        'neutral-off-black': '#1C211E'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}