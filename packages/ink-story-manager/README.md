# `ink-story-manager`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A javascript library for managing [Inkle's Ink](https://www.inklestudios.com/ink/) stories. `ink-story-manager` is part of [MIST monorepo](https://github.com/FranciscoFornell/MIST).

## Table of contents

- [Installation](#installation)
  - [Installation as npm package](#installation-as-npm-package)
  - [Installation as local dependency on other MIST packages](#installation-as-local-dependency-on-other-mist-packages)
- [Usage](#usage)
- [Documentation](#documentation)

## Installation

#### Installation as npm package

> **Note:**
> This package is on early development stage and **not yet published on npm**. Once it is published, you will be able to install it with `npm install --save inkjs ink-story-manager`.

### Installation as local dependency on other MIST packages

To use this package on other [MIST](https://github.com/FranciscoFornell/MIST) packages, you can let [lerna](https://lerna.js.org/) manage the dependency. `ink-story-manager` uses [`inkjs`](https://github.com/y-lohse/inkjs) as a peer dependency, so they should be installed together.

First install [`inkjs`](https://github.com/y-lohse/inkjs) on the package you want `ink-story-manager` in:

```bash
npm install --save inkjs
```

Add `ink-story-manager` to **package.json** dependencies property on the package in which you want yo use it.

> **Note:**
> The example version may be outdated. Make sure to use the proper version number.

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

Then go to the **repository root** and run:

> If you haven't done it already, install MIST dependencies

```bash
npm install
```

> Bootstrap MIST packages dependencies

```bash
npm run lerna:bootstrap
```

> And finally build all packages

```bash
npm run build
```

After that, you can import it as usual in the package in which you need it.

```javascript
// All MIST packages use babel, so you should use ES6 imports
import InkStoryManager from 'ink-story-manager';
```

## Usage

You need an [ink story](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) in json format in order to create an `InkStoryManager` instance.
You can convert an ink file to json using [Inky](https://github.com/inkle/inky) editor, or [`inklecate`](https://www.npmjs.com/package/inklecate), or a webpack loader such as [`inklecate-loader`](https://www.npmjs.com/package/inklecate-loader). Then you can import the json file on your javascript with a commonJS require or an ES6 import. Or you can fetch it from a server. Once the json is loaded, you need to pass its storyContent property to InkStoryManager constructor.

```javascript
import import { storyContent } from 'ink-story.json';

const storyManager = InkStoryManager(storyContent);
```

## Documentation

You can find more detailed documentation [here](https://franciscofornell.github.io/MIST/ink-story-manager/latest).
