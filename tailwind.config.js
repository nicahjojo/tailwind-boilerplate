const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
            },
            colors: {
                'backdrop': '#F5F6FA', // for page background color
                'primary': { // primary theme color
                    DEFAULT: '#092443',
                    '50': '#F3F5E5',
                    '100': '#69762B',
                    '200': '#0C192D',
                    '300': '#1C2806',
                    '400': '#475467',
                    '500': '#0B4113',
                    '600': '#101828',
                    '700': '#1C2806',
                    '800': '#F3F6E5',
                    '900': '#000000'
                },
                'accent': colors.blue, // secondary theme color
                'warning': colors.amber, // for warning messages, statuses etc
                'success': colors.green, // for success messages, statuses etc
                'alert': colors.red, // for error messages, statuses etc
                'info': colors.blue, // for info messages, links etc
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/line-clamp'),
    ],
};