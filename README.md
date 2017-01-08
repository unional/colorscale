# color-map

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Color map generator with no dependency.

It is small (10k not minified) compare to other libraries.

## `createColorMap(from, to, shades, alpha?)`

```ts
import { createColorMap } from 'color-map'

// creates array of [r,g,b,a]
const rgbaRange = createColorMap([0, 0, 255], [0, 255, 128], 72, [0, 1])

// creates array of [r,g,b]
const rgbRange = createColorMap([0, 0, 255], [0, 255, 128], 72)
```

## `rgbHex(rgb)`

```ts
import { rgbHex } from 'color-map'

rgbHex([0, 128, 255]) // '#0080ff'
```

## `rgbaString(rgba)`

```ts
import { rgbaString } from 'color-map'

rgbaString([0, 128, 255, 0.2]) // 'rgba(0,128,255,0.3)`
```

## Contribute

```sh
# right after clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# edit `webpack.config.dev.js` to exclude dependencies for the global build.

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## Npm Commands

There are a few useful commands you can use during development.

```sh
# Run tests (and lint) automatically whenever you save a file.
npm run watch

# Run tests with coverage stats (but won't fail you if coverage does not meet criteria)
npm run test

# Manually verify the project.
# This will be ran during 'npm preversion' so you normally don't need to run this yourself.
npm run verify

# Build the project.
# You normally don't need to do this.
npm run build

# Run tslint
# You normally don't need to do this as `npm run watch` and `npm version` will automatically run lint for you.
npm run lint
```

Generated by [`generator-unional@0.3.1`](https://github.com/unional/unional-cli)

[npm-image]: https://img.shields.io/npm/v/color-map.svg?style=flat
[npm-url]: https://npmjs.org/package/colorscale
[downloads-image]: https://img.shields.io/npm/dm/color-map.svg?style=flat
[downloads-url]: https://npmjs.org/package/colorscale
[travis-image]: https://img.shields.io/travis/unional/color-map.svg?style=flat
[travis-url]: https://travis-ci.org/unional/color-map
[coveralls-image]: https://coveralls.io/repos/github/unional/color-map/badge.svg
[coveralls-url]: https://coveralls.io/github/unional/color-map
