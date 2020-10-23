# `ink-story-web-player`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A [React](https://es.reactjs.org/) component for playing [Inkle's Ink](https://www.inklestudios.com/ink/) stories

## Table of contents

- [Installation](#installation)
  - [Installation as npm package](#installation-as-npm-package)
  - [Installation as local dependency on other MIST packages](#installation-as-local-dependency-on-other-mist-packages)
- [Usage](#usage)
- [Documentation](#documentation)

## Installation

#### Installation as npm package

> **Note:**
> This package is on early development stage and **not yet published on npm**. Once it is published, you will be able to install it with `npm install --save inkjs react prop-types ink-story-web-player`.

### Installation as local dependency on other MIST packages

To use this package on other [MIST](https://github.com/FranciscoFornell/MIST) packages, you can let [lerna](https://lerna.js.org/) manage the dependency. `ink-story-web-player` uses [`inkjs`](https://github.com/y-lohse/inkjs), [`react`](https://www.npmjs.com/package/react) and [`prop-types`](https://www.npmjs.com/package/prop-types) as peer dependencies, so they should be installed together.

First install the peer dependencies on the package you want `ink-story-web-player` in:

> **Note:**
> You don't need to install those dependencies again if they are already on the package. For example, `react` will be already installed on any package created with [`create-react-app`](https://www.npmjs.com/package/create-react-app).

```bash
npm install --save inkjs react prop-types
```

Add `ink-story-web-player` to **package.json** dependencies property on the package in which you want yo use it.

> **Note:**
> The example version may be outdated. Make sure to use the proper version number.

```json
{
    ...
    "dependencies": {
        "ink-story-web-player": "^0.1.0",
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
import InkStoryWebPlayer from 'ink-story-web-player';
```

## Usage

You need an [ink story](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) in json format in order pass it as prop to `InkStoryWebPlayer` component.
You can convert an ink file to json using [Inky](https://github.com/inkle/inky) editor, or [`inklecate`](https://www.npmjs.com/package/inklecate), or a webpack loader such as [`inklecate-loader`](https://www.npmjs.com/package/inklecate-loader). Then you can import the json file on your javascript with a commonJS require or an ES6 import. Or you can fetch it from a server. Once the json is loaded, you need to pass its storyContent property to storyContent prop.

```javascript
import InkStoryWebPlayer from 'ink-story-web-player';
import { storyContent } from 'ink-story.json';

// And then in your JSX code:
...
    <InkStoryWebPlayer storyContent={storyContent} />
...
```

## Documentation

You can find more detailed documentation [here](https://franciscofornell.github.io/MIST/ink-story-web-player/latest).
