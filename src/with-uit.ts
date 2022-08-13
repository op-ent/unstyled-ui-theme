import type { Config } from 'tailwindcss'
import { defu } from 'defu'

const classicColors = {
    primary: {
        50: '#e5edff',
        100: '#bccaf9',
        200: '#92a7ef',
        300: '#6684e5',
        400: '#3c61dd',
        500: '#2248c3',
        600: '#193899',
        700: '#10286e',
        800: '#061845',
        900: '#00081d',
    },
    secondary: {
        50: '#efeaff',
        100: '#ccc2f3',
        200: '#aa9ce5',
        300: '#8874d9',
        400: '#664ccc',
        500: '#4c33b3',
        600: '#3b278c',
        700: '#291b65',
        800: '#18103f',
        900: '#08051b',
    },
    neutral: {
        50: '#e9f3fe',
        100: '#d1dae0',
        200: '#b8c0c5',
        300: '#9fa7ac',
        400: '#858d93',
        500: '#6c747a',
        600: '#535a60',
        700: '#3a4046',
        800: '#20282d',
        900: '#020e17',
    },
    danger: {
        50: '#ffe9e1',
        100: '#fcc3b8',
        200: '#f39d8d',
        300: '#ec775f',
        400: '#e65133',
        500: '#cc3819',
        600: '#a02a13',
        700: '#721d0c',
        800: '#471004',
        900: '#1f0200',
    },
    success: {
        50: '#e5fae9',
        100: '#c5e9cc',
        200: '#a3daae',
        300: '#80ca8e',
        400: '#5dbb6f',
        500: '#44a255',
        600: '#347e41',
        700: '#235a2e',
        800: '#123719',
        900: '#001401',
    },
    warning: {
        50: '#fff6da',
        100: '#ffe4ad',
        200: '#ffd27d',
        300: '#ffc04b',
        400: '#ffae1a',
        500: '#e69500',
        600: '#b37400',
        700: '#815300',
        800: '#4e3200',
        900: '#1e1000',
    },
    info: {
        50: '#dafdff',
        100: '#adf2ff',
        200: '#80e7fd',
        300: '#51defb',
        400: '#2ad4f8',
        500: '#19bbdf',
        600: '#0491ae',
        700: '#00687d',
        800: '#003f4d',
        900: '#00171d',
    },
}

const colors = (function () {
    const _colors = [
        'primary',
        'secondary',
        'neutral',
        'danger',
        'warning',
        'success',
        'info',
    ]

    const output: Record<string, Record<number, string>> = {}

    function hsl(str: string) {
        return `hsl(${str}, <alpha-value>))`
    }

    // auto
    for (const color of _colors) {
        const map: Record<number, string> = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = hsl(`var(--uit-${color}-auto-${i})`)
        }
        output[color] = map
    }

    // light
    for (const color of _colors) {
        const map: Record<number, string> = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = hsl(`var(--uit-${color}-light-${i})`)
        }
        output[`${color}Light`] = map
    }

    // auto
    for (const color of _colors) {
        const map: Record<number, string> = {}
        for (let i = 1; i <= 12; i++) {
            map[i] = hsl(`var(--uit-${color}-dark-${i})`)
        }
        output[`${color}Dark`] = map
    }

    return {
        ...output,
        ...Object.fromEntries(
            Object.entries(classicColors).map(([k, v]) => [`${k}Classic`, v])
        ),
    }
})()

const unstyledUiConfig: Config = {
    darkMode: 'class',
    content: ['./node-modules/@op-ent/unstyled-ui-theme/index.{js,mjs}'],
    theme: {
        colors,
        fontFamily: {
            sans: ['Space Grotesk', 'sans-serif'],
        },
    },
}

export const withUIT = (tailwindConfig: Config): Config => {
    const themeFont = unstyledUiConfig.theme?.fontFamily as { sans: string[] }
    const tailwindFont = tailwindConfig.theme?.fontFamily as { sans?: string[] }

    if (themeFont && tailwindFont) {
        themeFont.sans = tailwindFont?.sans || themeFont.sans
        // themeFont.serif = serif || themeFont.serif
        // themeFont.body = body || themeFont.body
    }

    return defu(unstyledUiConfig, tailwindConfig)
}
