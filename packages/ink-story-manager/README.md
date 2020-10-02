# `ink-story-manager`

![CI](https://github.com/FranciscoFornell/MIST/workflows/CI/badge.svg)
![Coverage branches](https://franciscofornell.github.io/MIST/ink-story-manager/badges/badge-branches.svg)![Coverage functions](https://franciscofornell.github.io/MIST/ink-story-manager/badges/badge-functions.svg)![Coverage lines](https://franciscofornell.github.io/MIST/ink-story-manager/badges/badge-lines.svg)![Coverage statements](https://franciscofornell.github.io/MIST/ink-story-manager/badges/badge-statements.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A javascript library for managing [Inkle's Ink](https://www.inklestudios.com/ink/) stories. `ink-story-manager` is part of [MIST monorepo](https://github.com/FranciscoFornell/MIST).

## Usage

> **Note:**
> This package is on early development stage and **not yet published on npm**. Once it is published, you will be able to install it with `npm install --save inkjs ink-story-manager`.

### Usage as local dependency on other MIST packages

To use this package on other [MIST](https://github.com/FranciscoFornell/MIST) packages, you can let [lerna](https://lerna.js.org/) manage the dependency. `ink-story-manager` uses [`inkjs`](https://github.com/y-lohse/inkjs) as a peer dependency, so they should be installed together.

First install [`inkjs`](https://github.com/y-lohse/inkjs) on the package in :

```bash
npm install --save inkjs
```

Add `ink-story-manager` to **package.json** dependencies property on the package in which you want yo use it.

> **Note:**
> The example version may be outdated. Make sure it uses the proper version number.

```json
{
    ...
    "dependencies": {
        "ink-story-manager": "^0.1.0",
        ...
    }
    ...
}
```

Then go to the repository root and run:

```bash
# If you haven't done it already, install MIST dependencies:
npm install
# Bootstrap MIST packages dependencies:
npm run lerna:bootstrap
# And finally build all packages
npm run build
```

After that, you can import it as usual in the package in which you need it:

```javascript
// All MIST packages use babel, so you should use ES6 imports
import InkStoryManager from 'ink-story-manager';
```

## Documentation

You can find more detailed documentation [here](https://franciscofornell.github.io/MIST/ink-story-manager/latest).
