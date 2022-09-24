import type { Config } from 'tailwindcss'
import { defu } from 'defu'
import { generateColors, colors as classicColors } from './colors'

const colors = generateColors(classicColors)

const unstyledUiConfig: Config = {
    darkMode: 'class',
    content: [
        './node_modules/@op-ent/unstyled-ui-theme/dist/index.js',
        './node_modules/@op-ent/unstyled-ui/dist/index.js',
    ],
    theme: {
        colors: {
            ...colors,
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
        },
        fontFamily: {
            sans: ['Space Grotesk', 'sans-serif'],
        },
    },
}

export const withTheme = (tailwindConfig: Config): Config => {
    const themeFont = unstyledUiConfig.theme?.fontFamily as { sans: string[] }
    const tailwindFont = tailwindConfig.theme?.fontFamily as { sans?: string[] }

    if (themeFont && tailwindFont) {
        themeFont.sans = tailwindFont?.sans || themeFont.sans
        // themeFont.serif = serif || themeFont.serif
        // themeFont.body = body || themeFont.body
    }

    return defu(unstyledUiConfig, tailwindConfig)
}
