import { Theme } from '@op-ent/unstyled-ui'

declare module '@op-ent/unstyled-ui' {
    export interface UnstyledUiGlobalColorOverride {
        color:
            | 'primary'
            | 'secondary'
            | 'neutral'
            | 'danger'
            | 'warning'
            | 'success'
            | 'info'
    }
    export interface UnstyledUiButtonSizeOverride {
        size: 'sm' | 'md' | 'lg'
    }
    export interface UnstyledUiButtonVariantOverride {
        variant: 'solid'
    }
}

export const theme: Theme = {
    button: {
        styles: {
            base: {
                initial: '',
            },
            sizes: {
                sm: '',
                md: '',
                lg: '',
            },
            variants: {
                solid: {
                    primary: '',
                    secondary: '',
                    neutral: '',
                    danger: '',
                    warning: '',
                    success: '',
                    info: '',
                },
            },
        },
    },
}
