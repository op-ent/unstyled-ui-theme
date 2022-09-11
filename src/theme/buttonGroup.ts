import { Theme } from '@op-ent/unstyled-ui'
import { DeepPartial } from 'ts-essentials'

export const buttonGroup: DeepPartial<Theme['buttonGroup']> = {
    styles: {
        base: {
            initial:
                '[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none',
        },
        variants: {
            solid: {
                primary:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-primary-8',
                secondary:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-secondary-8',
                neutral:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-neutral-8',
                danger: '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-danger-8',
                warning:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-warning-8',
                success:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-success-8',
                info: '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-info-8',
            },
            outline: {},
            ghost: {
                primary:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-primary-7',
                secondary:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-secondary-7',
                neutral:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-neutral-7',
                danger: '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-danger-7',
                warning:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-warning-7',
                success:
                    '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-success-7',
                info: '[&>*:not(:last-child)]:border-r-1 [&>*:not(:last-child)]:border-r-info-7',
            },
        },
    },
}
