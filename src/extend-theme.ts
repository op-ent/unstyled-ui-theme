import { Theme } from '@op-ent/unstyled-ui'
import defu from 'defu'
import { DeepPartial } from 'ts-essentials'
import { theme } from './theme'

export function extendTheme(customTheme: DeepPartial<Theme>) {
    return defu(customTheme, theme)
}
