import { defineConfig } from '@pandacss/dev';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    body: { value: 'Poppins' },
                },
            },
        },
        semanticTokens: {
            colors: {
                background: {
                    value: {
                        base: 'hsl(60, 4.8%, 95.9%)',
                        _dark: 'hsl(12, 6.5%, 13%)',
                    },
                },
                text: {
                    value: {
                        base: '#000000',
                        _dark: '#ffffff',
                    },
                },
                card: {
                    value: {
                        base: 'hsl(0, 0%, 100%)',
                        _dark: 'hsl(20, 14.3%, 8%)',
                    },
                },
                primary: {
                    value: {
                        base: 'hsl(24.6 95% 53.1%)',
                        _dark: 'hsl(20.5 90.2% 60%)',
                    },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: 'styled-system',

    conditions: {
        light: '[data-color-mode=light] &',
        dark: '[data-color-mode=dark] &',
    },
    staticCss: {
        themes: ['light', 'dark'],
    },
});
