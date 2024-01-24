## Deriv Icons

This project will export SVG, Sprite, React Components from a simple Figma Icon project.

## Prerequisite

We use [@figma-export](https://www.npmjs.com/package/@figma-export/cli) to export [Figma Components](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma#:~:text=Components%20are%20elements%20you%20can,icons%2C%20layouts%2C%20and%20more.) so Please read their docs and try to get comfortable with their concepts.

With [@figma-export](https://www.npmjs.com/package/@figma-export/cli) we export to handle `SVG` creation for each `Figma Component` and then with [transform-svg-with-svgo](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/transform-svg-with-svgo) we optimize the exported `SVG`s. this is a transformer and you can add/remove/update `SVG` attributes with it.

## Out Putters

- [@figma-export/output-components-as-svg](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svg)
  We use this to generate `SVG` files, you can check them in `svg` folder.

- [@figma-export/output-components-as-svgr](https://github.com/marcomontalbano/figma-exporter/blob/HEAD/packages/cli/packages/output-components-as-svgr)
  We use this to generate `React` Components based on `transformed ( optimized ) SVG` files. you can check them in `src/react` folder.

## Pre-installation

- node >=16.16.0
- npm >=7.21.0
- git (for `contribution`)
- Figma Token ( Check [This](https://www.figma.com/developers/api#authentication) to set it up for yourself )
- Figma File Id, for now you can use `XegjSl9fWXH2O7Mxo0Ctie`
- Figma icons page, for now you can use `deriv-icons`

## Quick start

1.  **Enter project directory**

    ```sh
    cd deriv-icons
    ```

2.  **Setup .env file**
    create a .env file inside `deriv-icons` folder with this content:
    ```
    FIGMA_TOKEN=YOUR_FIGMA_TOKEN
    FILE_ID=XegjSl9fWXH2O7Mxo0Ctie
    ICONS_PAGE=deriv-icons
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

## Build and Publish @deriv/icons Package

We use [rollup](https://rollupjs.org/guide/en/) for package bundling, in order to build the actual package you do the following:

1.  **Setup .env file**
    Configure the environment variables of the platform with these:
    ```
    FIGMA_TOKEN=YOUR_FIGMA_TOKEN
    FILE_ID=XegjSl9fWXH2O7Mxo0Ctie
    ICONS_PAGE=deriv-icons
    ```
2.  **Install your dependencies:**

    ```sh
    npm ci
    ```

3.  **Export:**

    ```sh
    npm run export
    ```
