import { Theme } from '@op-ent/unstyled-ui'
import { DeepPartial } from 'ts-essentials'

export const button: DeepPartial<Theme['button']> = {
    styles: {
        base: {
            initial:
                'inline-flex items-center border border-transparent rounded-md focus:outline-none focus:ring transition-colors',
        },
        sizes: {
            sm: 'px-3 py-2 text-sm leading-4',
            md: 'px-4 py-2 text-sm',
            lg: 'px-4 py-2 text-base',
        },
        variants: {
            solid: {
                primary:
                    'bg-primary-9 hover:bg-primary-10 focus:ring-primary-7 text-white shadow-sm',
                secondary:
                    'bg-secondary-9 hover:bg-secondary-10 focus:ring-secondary-7 text-white shadow-sm',
                neutral:
                    'bg-neutral-9 hover:bg-neutral-10 focus:ring-neutral-7 text-white shadow-sm',
                danger: 'bg-danger-9 hover:bg-danger-10 focus:ring-danger-7 text-white shadow-sm',
                warning:
                    'bg-warning-9 hover:bg-warning-10 focus:ring-warning-7 text-black shadow-sm',
                success:
                    'bg-success-9 hover:bg-success-10 focus:ring-success-7 text-white shadow-sm',
                info: 'bg-info-9 hover:bg-info-10 focus:ring-info-7 text-white shadow-sm',
            },
            outline: {
                primary:
                    'bg-primary-1 border-primary-7 hover:border-primary-8 hover:bg-primary-2 focus:ring-primary-7 text-primary-11 shadow-sm',
                secondary:
                    'bg-secondary-1 border-secondary-7 hover:border-secondary-8 hover:bg-secondary-2 focus:ring-secondary-7 text-secondary-11 shadow-sm',
                neutral:
                    'bg-neutral-1 border-neutral-7 hover:border-neutral-8 hover:bg-neutral-2 focus:ring-neutral-7 text-neutral-11 shadow-sm',
                danger: 'bg-danger-1 border-danger-7 hover:border-danger-8 hover:bg-danger-2 focus:ring-danger-7 text-danger-11 shadow-sm',
                warning:
                    'bg-warning-1 border-warning-7 hover:border-warning-8 hover:bg-warning-2 focus:ring-warning-7 text-warning-11 shadow-sm',
                success:
                    'bg-success-1 border-success-7 hover:border-success-8 hover:bg-success-2 focus:ring-success-7 text-success-11 shadow-sm',
                info: 'bg-info-1 border-info-7 hover:border-info-8 hover:bg-info-2 focus:ring-info-7 text-info-11 shadow-sm',
            },
            ghost: {
                primary:
                    'bg-primary-4 hover:bg-primary-5 focus:ring-primary-7 text-primary-11',
                secondary:
                    'bg-secondary-4 hover:bg-secondary-5 focus:ring-secondary-7 text-secondary-11',
                neutral:
                    'bg-neutral-4 hover:bg-neutral-5 focus:ring-neutral-7 text-neutral-11',
                danger: 'bg-danger-4 hover:bg-danger-5 focus:ring-danger-7 text-danger-11',
                warning:
                    'bg-warning-4 hover:bg-warning-5 focus:ring-warning-7 text-warning-11',
                success:
                    'bg-success-4 hover:bg-success-5 focus:ring-success-7 text-success-11',
                info: 'bg-info-4 hover:bg-info-5 focus:ring-info-7 text-info-11',
            },
        },
    },
}
