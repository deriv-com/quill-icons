# [@deriv/quill-icons](https://quill-icons-park.pages.dev/)

[npm-image]: https://img.shields.io/npm/v/@deriv/quill-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@deriv/quill-icons

[![npm][npm-image]][npm-url]

Include all of the [Deriv](https://deriv.com/) icons, which exports SVG and React Components from a simple Figma Icon project.

## Installation

```bash
npm i @deriv/quill-icons
```

**example usage**

```jsx
import { CurrencyAlgoIcon } from '@deriv/quill-icons';

const TestComponent = () => (
  <h3>
    Lets go for a <CurrencyAlgoIcon />?
  </h3>
);
```

<hr />

# Contribution Guidelines

## Prerequisite

We use [@figma-export](https://www.npmjs.com/package/@figma-export/cli) to export [Figma Components](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma#:~:text=Components%20are%20elements%20you%20can,icons%2C%20layouts%2C%20and%20more.) so Please read their docs and try to get comfortable with their concepts.

With [@figma-export](https://www.npmjs.com/package/@figma-export/cli) we export to handle `SVG` creation for each `Figma Component` and then with [transform-svg-with-svgo](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/transform-svg-with-svgo) we optimize the exported `SVG`s. this is a transformer and you can add/remove/update `SVG` attributes with it.

## Out Putters

- [@figma-export/output-components-as-svg](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svg):
  We use this to generate `SVG` files, you can check them in `svg` folder.

- [@figma-export/output-components-as-svgr](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svgr):
  We use this to generate `React` Components based on `transformed (optimized) SVG` files. you can check them in `src/react` folder.

## Pre-installation

- node >=16.16.0
- npm >=7.21.0
- git (for `contribution`)
- Figma Token (Check [This](https://www.figma.com/developers/api#authentication) to set it up for yourself)
- Figma File Id
- Figma icons page

## Quick start

1.  **Enter the project directory**

    ```sh
    cd quill-icons
    ```

2.  Create a `.env` file inside `quill-icons` folder with this content:

    ```
    FIGMA_TOKEN=your_figma_access_token
    ```

3.  **Install your dependencies:**

    ```sh
    npm ci
    ```

4.  **Export:**

    ```sh
    npm run export
    ```

<br />

## Figma Components Conventions

For now we don't have any conventions yet, but after coordintating with design team will update this section.

## Steps for exporting the new icons

For exporting new icons you just need to run `npm run rebuild` command, it will automatically export all of the SVGs and optimise them and convert them to the React components, after it finished the process you just need to commit the changes and create a new PR for it.

## Build and Publish

We are using **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** inside quill-icons which automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

**semantic-release** uses the commit messages to determine the consumer impact of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release.

> **So base on this it is really important to add a suitable commit message.**

The table below shows which commit message gets you which release type when semantic-release runs:

<br />

| Commit message               | Release type              |
| ---------------------------- | ------------------------- |
| **build**: commit message    | **patch** Fix Release     |
| **ci**: commit message       | **patch** Fix Release     |
| **chore**: commit message    | **patch** Fix Release     |
| **docs**: commit message     | **patch** Fix Release     |
| **style**: commit message    | **patch** Fix Release     |
| **test**: commit message     | **patch** Fix Release     |
| **refactor**: commit message | **Minor** Feature Release |

**Triggering a release**

For each new commit added to one of the release branches (for example: main, next, beta), with git push or by merging a pull request or merging from another branch, a CI build is triggered and runs the semantic-release command to make a release if there are codebase changes since the last release that affect the package functionalities.

For further information please checkout the **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** documentation.
