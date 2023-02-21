const defaultTheme = require('tailwindcss/defaultTheme');


const colorShade = require('../../tailwind/color-shades');
// const underlineAnimation = require('./tailoff/tailwind/underline-animation');

const siteColors = {
    primary: {
        DEFAULT: '#2D92BF',
        contrast: '#ffffff',
        hover: '#1F5B93',
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
            xs: '480px',
            sm: '660px',
            md: '820px',
            lg: '980px',
            xl: '1200px',
        },
        extend: {
            
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
                '10': '192px',
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
        // underlineAnimation,
    ],
};
