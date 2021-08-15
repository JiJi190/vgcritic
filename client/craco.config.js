const autoprefixer = require('autoprefixer');

//craco config
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }
    }
}