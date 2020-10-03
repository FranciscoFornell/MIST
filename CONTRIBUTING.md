# Contributing to MIST

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to MIST and its packages. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

- [MIST is a monorepo](#mist-is-a-monorepo)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [Git Branch Names](#git-branch-names)
- [Git Commit Messages](#git-commit-messages)
- [JavaScript Styleguide](#javascript-styleguide)
- [Tests Styleguide](#tests-styleguide)
- [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)

- [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [fco.fornell@gmail.com](mailto:fco.fornell@gmail.com).

## I don't want to read this whole thing I just have a question!!!

If you have any questions you can always [file an issue](https://github.com/FranciscoFornell/MIST/issues/new) with the question label, or [contact by email](mailto:fco.fornell@gmail.com).

## What should I know before I get started?

### MIST is a monorepo

MIST is a monorepo containing [several different packages](README.md#packages), and maintained with [Lerna](https://lerna.js.org/). If you want to contribute to any of them, you must clone the whole repository and you will find them under [the packages directory](packages/).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for MIST. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/FranciscoFornell/MIST/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Determine [which package the problem should be reported in](#mist-is-a-monorepo)**.
- **Perform a [cursory search](https://github.com/FranciscoFornell/MIST/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which package](#mist-is-a-monorepo) your bug is related to, [create an issue](<(https://github.com/FranciscoFornell/MIST/issues/new)>) on the repository, add both the bug label and the specific package label, and provide the following information by filling in [the template](https://github.com/FranciscoFornell/MIST/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and, if possible, include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** if the problem is related to styles or animations. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version?** What's the most recent version in which the problem doesn't happen? You can download older versions from [the releases page](https://github.com/FranciscoFornell/MIST/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

- **Which package version failed?** You can see the exact version by running `npm list package-name` in your terminal if you have it installed.
- **What's the name and version of the OS and browser you're using?**

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for any MIST packages, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/FranciscoFornell/MIST/blob/master/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

- **Determine [which package the enhancement should be suggested in](#mist-is-a-monorepo).**
- **Perform a [cursory search](https://github.com/FranciscoFornell/MIST/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which package](#mist-is-a-monorepo) your enhancement suggestion is related to, [create an issue](<(https://github.com/FranciscoFornell/MIST/issues/new)>) on the repository, add both the enhancement label and the specific package label, and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** if it helps you demonstrate the steps or point out the part the package which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most users.
- **List some other software examples where this enhancement exists.**
- **Specify which version the package you're using.** You can see the exact version by running `npm list package-name` in your terminal if you have it installed.
- **What's the name and version of the OS and browser you're using?**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/FranciscoFornell/MIST/issues?q=is%3Aopen+label%3A%22%3Anew%3A+good+first+issue%22+sort%3Areactions-%2B1-desc) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/FranciscoFornell/MIST/issues?q=is%3Aopen+label%3A%22%3Asos%3A+help+wanted%22+sort%3Areactions-%2B1-desc) - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of +1 reactions but you can change to other useful sorting ways, such as ascendent -1 reactions, or by number of comments.

#### Local development

All MIST packages can and should be developed locally. In order to do so, follow these steps:

Clone MIST monorepo:

```bash
git clone https://github.com/FranciscoFornell/MIST.git
```

Now create a new branch following the [branch names styleguide](#git-branch-names)

```bash
git checkout feature-1_do-something
```

CODE_OF_CONDUCT

```bash
npm install
```

Bootstrap all packages dependencies:

```bash
npm run lerna:bootstrap
```

Build all packages:

```bash
npm run build
```

Now you can go to the package you want to develop (they are in packages directory) and start the development server:

```bash
npm start
```

It depends on the package, but usually `npm start` it will lint and test the code in watch mode, and also serve the app or docs locally in watch mode. Now you can edit the code and it will run lints, tests and refresh the development server automatically.

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

> TODO
> Add pull request template and update link

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [Styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Branch Names

Branch names should have the following structure:
`<type_of_issue>-<issue_number>_<description>`

The types can be:

- `docs`: Only documentation related changes
- `feat`: Related to new features and enhancements
- `bug`: Bug fixes
- `build`: Changes that affect the build system or external dependencies

Example of a good branch name: `docs-39_create-contributing-documentation`

### Git Commit Messages

- Follow the [conventional commits](https://www.conventionalcommits.org/) styleguide. Otherwise the commit will fail, as the commit message is linted on a git hook.
- There are plugins make following this convention easier for the most used editors. For example on VS Code you can use [this plugin](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits).
- Use the present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "moves cursor to...")
- Consider starting the commit message description with an applicable emoji, following [this guide](https://gitmoji.carloscuesta.me/).

Example of a good commit message: `docs: :memo: update README.md`

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io/). It also uses prettier to auto-format your code when you commit.
We also use ESLint for some additional linting not covered by prettier.

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- When possible, prefer ES6 import over commonJS require.
- Prefer React named arrow function components with [hooks](https://es.reactjs.org/docs/hooks-intro.html) over class components.

```javascript
const MyComponent = ({ someProp }) => {
  return (
    <React.Fragment>
      <span>Render the prop value: </span>
      <span>{someProp}</span>
    </React.Fragment>
  );
};
```

### Tests Styleguide

- Include thoughtfully-worded, well-structured [Jest](https://jestjs.io/) tests. Test files should be on the same directory as the tested file, and have the same name with `.test.js` extension.

#### Example

```javascript
describe('a dog', () => {
  it('should bark', () => {
    // spec here
  });

  describe('when the dog is happy', () => {
    it('should wag its tail', () => {
      // spec here
    });
  });
});
```

### Documentation Styleguide

- Use [JSDoc](https://jsdoc.app/index.html) comments on your code.
- Use [better-docs @component tag](https://github.com/SoftwareBrothers/better-docs#component-plugin-beta) to document react components.
- Use [Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) for README.md files.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. To help you find issues and pull requests, each label is listed with search links for finding open items with that label. We encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

Please open an issue if you have suggestions for new labels.

#### Type of Issue and Issue State

|                  Label name                  |                                                 Search issues 🔎                                                 |                                                           Description                                                           |
| :------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|            :sparkles: enhancement            |              [Search](https://github.com/FranciscoFornell/MIST/labels/%3Asparkles%3A%20enhancement)              |                                                        Feature requests.                                                        |
|                  :bug: bug                   |                    [Search](https://github.com/FranciscoFornell/MIST/labels/%3Abug%3A%20bug)                     |                                   Confirmed bugs or reports that are very likely to be bugs.                                    |
|             :question: question              |               [Search](https://github.com/FranciscoFornell/MIST/labels/%3Aquestion%3A%20question)                |                            Questions more than bug reports or feature requests (e.g. how do I do X).                            |
|          :speech_balloon: feedback           |            [Search](https://github.com/FranciscoFornell/MIST/labels/%3Aspeech_balloon%3A%20feedback)             |                                   General feedback more than bug reports or feature requests.                                   |
|              :sos: help wanted               |               [Search](https://github.com/FranciscoFornell/MIST/labels/%3Asos%3A%20help%20wanted)                |                             We would appreciate help from the community in resolving these issues.                              |
|            :new: good first issue            |            [Search](https://github.com/FranciscoFornell/MIST/labels/%3Anew%3A%20good%20first%20issue)            |            Less complex issues which would be good first issues to work on for users who want to contribute to Atom.            |
| :information_source: more information needed | [Search](https://github.com/FranciscoFornell/MIST/labels/%3Ainformation_source%3A%20more%20information%20needed) |           More information needs to be collected about these problems or feature requests (e.g. steps to reproduce).            |
|              :no_entry: blocked              |                [Search](https://github.com/FranciscoFornell/MIST/labels/%3Ano_entry%3A%20blocked)                |                                                 Issues blocked on other issues.                                                 |
|               :two: duplicate                |                 [Search](https://github.com/FranciscoFornell/MIST/labels/%3Atwo%3A%20duplicate)                  |                        Issues which are duplicates of other issues, i.e. they have been reported before.                        |
|           :no_entry_sign: wontfix            |             [Search](https://github.com/FranciscoFornell/MIST/labels/%3Ano_entry_sign%3A%20wontfix)              | The core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
|              :no_good: invalid               |                [Search](https://github.com/FranciscoFornell/MIST/labels/%3Ano_good%3A%20invalid)                 |                                          Issues which aren't valid (e.g. user errors).                                          |

#### Topic Categories

|           Label name            |                                        Search issues 🔎                                         |                          Description                          |
| :-----------------------------: | :---------------------------------------------------------------------------------------------: | :-----------------------------------------------------------: |
|      :memo: documentation       |      [Search](https://github.com/FranciscoFornell/MIST/labels/%3Amemo%3A%20documentation)       |             Related to any type of documentation              |
|        :zap: performance        |        [Search](https://github.com/FranciscoFornell/MIST/labels/%3Azap%3A%20performance)        |                    Related to performance.                    |
| :closed_lock_with_key: Security | [Search](https://github.com/FranciscoFornell/MIST/labels/%3Aclosed_lock_with_key%3A%20Security) |                     Related to security.                      |
|            :art: ui             |            [Search](https://github.com/FranciscoFornell/MIST/labels/%3Aart%3A%20ui)             |                   Related to visual design.                   |
|   :construction_worker: build   |   [Search](https://github.com/FranciscoFornell/MIST/labels/%3Aconstruction_worker%3A%20build)   | Changes that affect the build system or external dependencies |

#### Packages

|           Label name           |                                        Search issues 🔎                                        |               Description               |
| :----------------------------: | :--------------------------------------------------------------------------------------------: | :-------------------------------------: |
|  :package: ink-story-manager   |  [Search](https://github.com/FranciscoFornell/MIST/labels/%3Apackage%3A%20ink-story-manager)   |  Related to ink-story-manager package   |
| :package: ink-story-web-player | [Search](https://github.com/FranciscoFornell/MIST/labels/%3Apackage%3A%20ink-story-web-player) | Related to ink-story-web-player package |
|      :package: mist-utils      |      [Search](https://github.com/FranciscoFornell/MIST/labels/%3Apackage%3A%20mist-utils)      |      Related to mist-utils package      |
