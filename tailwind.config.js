const defaults = require('tailwindcss/defaultTheme')

// Settings
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: settingsScreens,
        fontSize: settingsFontSizes,
        extend: {
            fontFamily: {
                base: ['Inter', ...defaults.fontFamily.sans],
                space: ['Space Mono', ...defaults.fontFamily.mono],
                script: ['Nanum Pen Script', ...defaults.fontFamily.mono],
                code: ['Source Code Pro', ...defaults.fontFamily.mono],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('tailwindcss-debug-screens'),
    ],
};
