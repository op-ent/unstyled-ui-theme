import { createTheme } from '@op-ent/unstyled-ui'
import { button } from './theme/button'
import { buttonGroup } from './theme/buttonGroup'

declare module '@op-ent/unstyled-ui' {
    export interface UUIThemeConfigOverride {
        global: {
            colors:
                | 'primary'
                | 'secondary'
                | 'neutral'
                | 'danger'
                | 'warning'
                | 'success'
                | 'info'
        }
        components: {
            button: {
                variants: 'solid' | 'outline' | 'ghost'
                sizes: 'sm' | 'md' | 'lg'
            }
        }
    }
}

export const { theme, extendTheme } = createTheme({
    button,
    buttonGroup,
})
