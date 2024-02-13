<img src="./svg/Logo/LogoBrandDerivLogoCoral.svg" alt="Deriv Quill Icons">

# [Deriv Quill Icons](https://quill-icons-park.pages.dev/)

[npm-image]: https://img.shields.io/npm/v/@deriv/quill-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@deriv/quill-icons

[![npm][npm-image]][npm-url]

Explore and integrate the complete set of icons from [Deriv](https://deriv.com/) with easy-to-use React components. These icons are exported from a Figma Icon project.

## The motivation of creating this library

We developed the Deriv Quill Icons library to address several critical considerations across our projects:

1. **Consistency across all of our projects:** By creating Deriv Quill Icons we ensure a consistent design language across all of our applications. All icons will have a similar style, size, and color.
2. **Easy Maintenance:** Managing all of the icons in a centralised library makes it easier to update or modify them. If we decide to change the design or add new icons, we only need to make changes in one place, and the updates will be reflected throughout all of our applications.
3. **Reuse and Efficiency:** We can easily reuse the same set of icons across different components and pages in our applications. This promotes code reusability and reduces redundancy, as we don't have to duplicate icon assets or styles.
4. **Customisation:** It allows us to customise our icons globally. For example, we can change the color scheme, size, or other visual aspects of all icons in one place without modifying individual components. Also we can easily apply optimisations to all of our icons in one place.
5. **Developer Productivity:** It enhances our developer productivity. Developers can easily find and use the icons they need without having to search for or create new assets each time.

and ...

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

## Outputters

- [@figma-export/output-components-as-svg](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svg):
  We use this to generate `SVG` files, you can check them in `svg` folder.
- [@figma-export/output-components-as-svgr](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svgr):
  We use this to generate `React` Components based on `transformed (optimized) SVG` files. you can check them in `src/react` folder.

## Pre-installation

- node >=16.16.0
- npm >=7.21.0
- git (for `contribution`)
- Figma Token (Check [This](https://www.figma.com/developers/api#authentication) to set it up for yourself)
- Figma File ID
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

## Icons Naming Conventions

In the Quill Design System, we utilise naming conventions to store and locate components in their respective groups easily. The naming conventions differ slightly between **Quill Icons**, **Quill Logos** and **Quill Illustrations**. This is to cater specifically to their specific needs.

### Quill Icons: [Category name] / [Size] / [Icon name] / [Style]

- **"Category name"** refers to the broad number of categories the icons reside in—such as currency, flag, and market icons.
- _(Only if applicable)_ The **"Size"** part of the naming convention is only added when the icons are provided in multiple different sizes.
- **"Icon name"** is the distinct name for each icon that differentiates one icon from another.
- _(Only if applicable)_ Applied to icons that have variations—such as regular/bold and white/black.

**Examples of icons using this naming convention:**

1. **illustrative / md / derived-md** = [Category name] / [Size] / [Icon name]
2. **flags / flag-malysia** = [Category name] / [Icon name]
3. **standalone / sm / grips-dots-vertical-sm / regular** = [Category name] / [Size] / [Icon name] / [Style]

### Quill Logos : [Category name] / [Subcategory name] / [Logo name] / [Style]

- **"Category name"** refers to the general category that encapsulates all logos, hence, the name "logo".
- **"Subcategory name"** refers to the specific categories that further divide logos into—such as brands, sub-brands, and payment methods.
- **"Logo name"** is the distinct name for each logo that differentiates one logo from another.
- **"Styles"** are variations of the logo, in terms of colour, alignment, etc.

**Examples of logos using this naming convention:**

1. **logo / brand / deriv-wordmark / coral** = [Category name] / [Subcategory name] / [Logo name] / [Style]
2. **logo / payment method / visa / brand** = [Category name] / [Subcategory name] / [Logo name] / [Style]

### Quill Illustration : [Category name] / [Subcategory name] / [Style] / [Illustration name]

- **"Category name"** refers to the general category that encapsulates all illustrations, hence, the name "illustration".
- **"Subcategory name"** refers to the specific categories that further divide illustrations into.
- **"Styles"** are variations of the illustration, in terms of colour, theme, etc.
- **"Illustration name"** is the distinct name for each illustration that differentiates one illustration from another.

**Examples of illustrations using this naming convention:**

1. **illustration / deriv / light / pairs** = [Category name] / [Subcategory name] / [Style] / [Illustration name]
2. **illustration / deriv / light / ic-cashier-locked** = [Category name] / [Subcategory name] / [Style] / [Illustration name]
3. **illustration / deriv / dark / positions-history** = [Category name] / [Subcategory name] / [Style] / [Illustration name]

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
