# @op-ent/unstyled-ui-theme

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![MIT License][license-src]][license-href]

`@op-ent/unstyled-ui-theme` is the official theme of [op-ent](https://github.com/op-ent), to use with [unstyled-ui](https://github.com/op-ent/unstyled-ui) and Tailwind CSS.

## Prerequisites

-   Have Tailwind CSS [setup in your project](https://tailwindcss.com/docs/installation)
-   Have [unstyled-ui](https://github.com/op-ent/unstyled-ui) installed

## Usage

Install package:

```sh
# npm
npm install @op-ent/unstyled-ui-theme

# yarn
yarn install @op-ent/unstyled-ui-theme

# pnpm
pnpm install @op-ent/unstyled-ui-theme
```

Wrap your config in `tailwind.config.js` with `withTheme`:

```js
const { withTheme } = require('@op-ent/unstyled-ui-theme')

/** @type {import('tailwindcss').Config} */
module.exports = withTheme({
    // your config
})
```

Import the colors in your app. For example in a Next.js project in `/pages/_app.tsx`:

```js
import '@op-ent/unstyled-ui-theme/dist/colors.css'
// rest of your app
```

Create a theme, for example in `/lib/theme.tsx` (use JSX because the config can use JSX):

```js
import { extendTheme } from '@op-ent/unstyled-ui-theme'

export const theme = extendTheme({})
```

Wrap your app with the `ThemeProvider`. For example in a Next.js project in `/pages/_app.tsx`:

```jsx
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider value={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
```

And you're good to go!

## 💻 Development

-   Clone this repository
-   Install dependencies using `yarn install`
-   Watch files in development using `yarn dev`
-   Run interactive tests using `yarn test`

## License

Published under [MIT License](./LICENSE).

Made with ❤️ by [Florian LEFEBVRE](https://github.com/florian-lefebvre) in France.

---

<table>
  <thead>
    <tr>
      <th colspan="2">Sponsors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.netlify.com" target="_blank">
          <img alt="Netlify banner" height="51px" src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" />
        </a>
      </td>
      <td>
        <a href="https://cleavr.io" target="_blank">
          <img alt="Cleavr banner" height="51px" src="https://hcti.io/v1/image/ae9a047f-22b3-4016-a37a-80f297894678" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

<!-- Badges -->
<!-- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -->

[npm-version-src]: https://img.shields.io/npm/v/@op-ent/unstyled-ui-theme?style=flat-square
[npm-version-href]: https://npmjs.com/package/@op-ent/unstyled-ui-theme
[npm-downloads-src]: https://img.shields.io/npm/dm/@op-ent/unstyled-ui-theme?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@op-ent/unstyled-ui-theme
[github-actions-src]: https://img.shields.io/github/workflow/status/op-ent/unstyled-ui-theme/ci/main?style=flat-square
[github-actions-href]: https://github.com/op-ent/unstyled-ui-theme/actions?query=workflow%3Aci
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@op-ent/unstyled-ui-theme?style=flat-square
[bundle-href]: https://bundlephobia.com/result?p=@op-ent/unstyled-ui-theme
[codecov-src]: https://img.shields.io/codecov/c/gh/op-ent/unstyled-ui-theme/main?style=flat-square
[codecov-href]: https://codecov.io/gh/op-ent/unstyled-ui-theme
[license-src]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-href]: ./LICENSE
