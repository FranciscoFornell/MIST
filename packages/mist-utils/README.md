# `mist-utils`

![CI](https://github.com/FranciscoFornell/MIST/workflows/CI/badge.svg)
![Coverage branches](https://franciscofornell.github.io/MIST/mist-utils/badges/badge-branches.svg)![Coverage functions](https://franciscofornell.github.io/MIST/mist-utils/badges/badge-functions.svg)![Coverage lines](https://franciscofornell.github.io/MIST/mist-utils/badges/badge-lines.svg)![Coverage statements](https://franciscofornell.github.io/MIST/mist-utils/badges/badge-statements.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Private package for sharing common utilities across [MIST monorepo](https://github.com/FranciscoFornell/MIST)

## Usage

As this is a private package, and thus, not published on npm, you need to let [lerna](https://lerna.js.org/) manage the dependency:

Add `mist-utils` to **package.json** dependencies property on the package in which you want yo use it, if it doesn't have it already.

```json
{
    ...
    "dependencies": {
        "mist-utils": "~1.0.0",
        ...
    }
    ...
}
```

Then go to the repository root and run:

```bash
npm run lerna:bootstrap
```

After it finish, you can use it in your imports in that package. For example, if you want to import the pick method, you can do it like this, and benefit from [webpack](https://webpack.js.org/)'s tree shaking:

```javascript
import { pick } from 'mist-utils';
```

## Documentation

You can find more detailed documentation [here](https://franciscofornell.github.io/MIST/mist-utils/latest).
