# [Deriv Quill Icons](https://quill-icons-park.pages.dev/)

[npm-image]: https://img.shields.io/npm/v/@deriv/quill-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@deriv/quill-icons

[![npm][npm-image]][npm-url]

Explore and integrate the complete set of icons from [Deriv](https://deriv.com/) with easy-to-use React components. These icons are exported from a Figma Icon project.

## Installation

```bash
npm i @deriv/quill-icons
```

**Usage**

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

## OutPutters

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

Currently, we don't have specific conventions. We will update this section in coordination with the design team.

## Exporting New Icons

To export new icons, run `npm run rebuild`. It will automatically export, optimize, and convert SVGs to React components. Afterward, just commit the changes and create a new PR.

## Build and Publish

We use **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** for automating the release workflow. Commit messages determine the release type. Refer to the table below for guidelines.

| Commit message                      | Release type                |
| ----------------------------------- | --------------------------- |
| build, ci, chore, docs, style, test | **Patch** (Fix Release)     |
| refactor                            | **Minor** (Feature Release) |

**Triggering a release**

For each new commit added to one of the release branches (for example: main, next, beta), with git push or by merging a pull request or merging from another branch, a CI build is triggered and runs the semantic-release command to make a release if there are codebase changes since the last release that affect the package functionalities.

For further information please checkout the **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** documentation.
