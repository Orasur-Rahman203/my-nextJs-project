/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui:{
  themes: [
    {
      mytheme: {
      
"primary": "#0891B2",
      
"secondary": "#F000B8",
      
"accent": "#155e75",
      
"neutral": "#3D4451",
      
"base-100": "#FFFFFF",
      
"info": "#3ABFF8",
      
"success": "#36D399",
      
"warning": "#FBBD23",
      
"error": "#F87272",
      },
      backgroundOpacity: {
        '0': '0',
        '10': '0.1',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1',
      },
      extend: {
        backgroundColor: ['hover', 'focus', 'active'],
      },
    },
    
  ],
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
    },
  },
}

