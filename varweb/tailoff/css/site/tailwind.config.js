const defaultTheme = require('tailwindcss/defaultTheme');


const colorShade = require('../../tailwind/color-shades');
// const underlineAnimation = require('./tailoff/tailwind/underline-animation');

const siteColors = {
    primary: {
        DEFAULT: '#2D92BF',
        contrast: '#ffffff',
        hover: '#104A80',
        hoverContrast: '#ffffff',
    },
    secondary: {
        DEFAULT: '#0409a6',
        contrast: '#ffffff',
        hover: '#050cd8',
        hoverContrast: '#ffffff',
    },
    tertiary: {
        DEFAULT: '#E7EBEE',
        contrast: '#ffffff',
    },

    green:{
        DEFAULT: '#4BCFA5',
        contrast: '#ffffff',
    },
    gray: {
        DEFAULT: '#687483',
        contrast: '#ffffff',
    },
    offwhite: {
        DEFAULT: '#F2F2F2',
        contrast: '#ffffff',
    },
    pitchblack:{
        DEFAULT: '#000000',
        contrast: '#ffffff',
    },
};

module.exports = {
    content: [`tailoff/js/**/*.{ts,js}`, `templates/_site/**/*`, `templates/jsPlugins/**/*`],
    theme: {
        fill:{
            'black': '#000000',
            'white': '#ffffff',
            'gray': '#687483',
        },
        borderRadius: {
            DEFAULT: '4px',
            'none': '0',
            'sm': '4px',
            'md': '8px',
            'lg': '16px',
            'full': '9999px',
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
        },
        container: {
            center: true,
            padding: defaultTheme.spacing['4'],
        },
        fontFamily: {
            accent: 'serif',
            base: 'sans-serif',
        },
        screens: {
            xxs:'400px',
            xs: '480px',
            sm: '660px',
            md: '820px',
            lg: '980px',
            xl: '1200px',
        },
        extend: {
            height:{
                '600': '600px',
            },

            rotate: {
                '20': '20deg',
              },
            
            brightness: {
                0: '0',
                25: '.25',
                35: '.35',
                50: '.5',
                75: '.75',
                100: '1',
                175: '1.75',
            },
            colors: {
                ...siteColors,
                black: '#1C1B1F',
                light: '#f5f5f5',
            },
            screens: {
                print: { raw: 'print' },
            },
            minWidth: {
                searchbox: '225px',
            },
            maxWidth: {
                flyout: '90vw',
                modal: '725px',
                logo: '150px',
            },
            fontSize: {
                'xxxs': ['14px', {
                    lineHeight: '20px',
                    fontWeight: '400',
                }],
                'xxs': ['16px', {
                    lineHeight: '24px',
                    fontWeight: '400',
                }],
                'xs': ['18px', {
                    lineHeight: '25px',
                    fontWeight: '400',
                }],
                'sm': ['18px', {
                    lineHeight: '28px',
                    fontWeight: '500',
                }],
                'md': ['20px', {
                    lineHeight: '28px',
                    fontWeight: '500',
                }],

                'base': ['20px', {
                    lineHeight: '28px',
                    fontWeight: '400',
                }],

                'foot': ['22px', {
                    lineHeight: '26.4px',
                    fontWeight: '500',
                }],

                'lg': ['26px', {
                    lineHeight: '31.21px',
                    fontWeight: '500',
                }],
                'xl': ['32px', {
                    lineHeight: '38.4px',
                    fontWeight: '500',
                }],
                '2xl': ['44px', {
                    lineHeight: '49px',
                    fontWeight: '500',
                }],
            },
            zIndex: {
                99: '99',
                100: '100',
            },
            boxShadow: {
                card: '0 0 30px 0 rgba(0,0,0,0.15)',
            },
            inset: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '80': '17rem',
                '90' : '22rem',
                '98': '30rem',
                '100': '38rem',
                '110': '42rem',
                '120': '46rem',

            },

            spacing: {
                '0.4': '4px',
                '1': '8px',
                '2': '12px',
                '3': '16px',
                '4': '24px',
                '5': '32px',
                '6': '40px',
                '7': '64px',
                '7.5': '70px',
                '7.7': '93px',
                '8': '96px',
                '9': '128px',
                '9.5': '150px',
                '10': '192px',
                '10.5': '224px',
                '11': '256px',
                '12': '280px',
                '13': '320px',
                '14': '384px',
                '15': '448px',
                '16': '512px',
                '17': '576px',
                '18': '640px',

                '3/5': '60%',
                '55/100': '55%',
                '150' : '150%',
            },
            fontFamily: {
                'sans': ['FlandersArtSans'],
                'serif': ['FlandersArtSerif'],
            },

            fontWeight: {
                'light': '300',
                'normal': '400',
                'medium': '500',
                'semibold': '600',
                'bold': '700',
              },
            
        },
    },
    plugins: [
        colorShade(siteColors),
        [require("@tailwindcss/forms")],
    ],
};
