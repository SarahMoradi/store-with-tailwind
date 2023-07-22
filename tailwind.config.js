//  @type {import('tailwindcss').Config} 
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          sans: ['iranYekan']
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }