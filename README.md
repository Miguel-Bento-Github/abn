# Welcome to the Maze!

## Summary

I've developed a full-fledged web application using the latest technologies and tools. Our project is built with **TypeScript**, **Vite**, **Vue 3**, **Vue Router**, **Pinia**, **Cypress**, **Vitest**, **TanStack Query**, **ESLint**, **Prettier**, **Sass**, and **vue i18n**.

**TypeScript** brings static typing to JavaScript, making it more robust and maintainable. I've leveraged **Vite** to ensure fast development and quick builds, making it easier for developers to work on the project. **Vue 3**, **Vue Router**, and **Pinia** have been used together to create an efficient and responsive frontend framework, along with a robust state management solution.

I've used **Cypress** and **Vitest** to perform automated end-to-end testing, ensuring the quality of the application. **TanStack Query** has been incorporated to provide efficient and convenient data fetching and management. I've also used **ESLint** and **Prettier** to ensure the code adheres to industry-standard practices, making it more consistent, reliable, and maintainable.

In terms of styling, I've used **Sass** to write modular and scalable CSS code. And with **vue i18n**, I've made the application easily translatable, allowing users to switch between different languages.

The repository is built with the latest technology and best practices to deliver a highly scalable and maintainable web application.

## How to run

Make sure you are using **Node version 22 and npm 10** or above

| Script         | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `build`        | Compiles TypeScript files and builds the production-ready application with Vite. |
| `build:watch`  | Builds the application in watch mode, with minification disabled.                |
| `cy:e2e`       | Starts the development server and runs Cypress end-to-end tests.                 |
| `test:unit`    | Runs unit tests with Vitest.                                                     |
| `lint`         | Runs ESLint on all relevant files, fixing errors and caching results.            |
| `dev`          | Starts the development server.                                                   |
| `i18n:report`  | Generates a report of translation keys used in Vue files and language files.     |
| `prod:preview` | Previews the production build on port 8261.                                      |

## Architecture

# Project Directory Structure

## Root Files

- **README.md**: Documentation file for the project.
- **cypress.config.ts**: Configuration file for Cypress.
- **cypress.d.ts**, **env.d.ts**: TypeScript declaration files.
- **index.html**: The main HTML file for the application.
- **package.json**: Contains metadata about the project, including dependencies and scripts.
- **pnpm-lock.yaml**: Lock file for dependencies managed by pnpm.
- **tsconfig.json**: TypeScript configuration file.
- **vite.config.ts**: Configuration file for Vite, a build tool.

## Cypress Directory (for end-to-end testing)

- **cypress/downloads**: Directory for downloaded files during tests.
- **cypress/e2e**: Contains end-to-end test files.
  - **home.cy.ts**: Test file for the home page.
  - **show.cy.ts**: Test file for the show page.
- **cypress/fixtures**: Contains static data used for testing.
  - **data.json**: Example fixture file.
- **cypress/support**: Contains support files for Cypress.
  - **commands.ts**: Custom commands for Cypress.
  - **component-index.html**, **component.ts**: Component testing support files.
  - **e2e.ts**: End-to-end support file.
- **cypress/tsconfig.json**: TypeScript configuration for Cypress.

## Public Directory (for static assets)

- **public/android-icon-144x144.png**, **public/android-icon-192x192.png**, etc.: Various icons for different devices and purposes.
- **public/browserconfig.xml**: Configuration file for Microsoft browsers.
- **public/favicon-16x16.png**, **public/favicon-32x32.png**, **public/favicon-96x96.png**, **public/favicon.ico**: Favicon files.
- **public/manifest.json**: Web app manifest file.
- **public/ms-icon-144x144.png**, **public/ms-icon-150x150.png**, **public/ms-icon-310x310.png**, **public/ms-icon-70x70.png**: Microsoft icons.

## Source Directory (src)

- **src/App.vue**: Root Vue component.
- **src/components**: Contains Vue components.
  - **src/components/genre-selector/GenreSelector.vue**: Genre selector component.
  - **src/components/locale-changer/LocaleChanger.vue**: Locale changer component.
  - **src/components/locale-changer/**tests**/LocaleChanger.cy.ts**: Test for the locale changer component.
  - **src/components/show-card/ShowCard.vue**: Show card component.
- **src/components.d.ts**: TypeScript declarations for components.
- **src/const/locale.ts**: Locale constants.
- **src/keycloak.ts**: Keycloak integration.
- **src/locales**: Localization files.
  - **src/locales/en-US.json**: English locale.
  - **src/locales/zh-CN.json**: Chinese locale.
- **src/main.ts**: Main entry point for the application.
- **src/plugins**: Contains plugin configurations.
  - **src/plugins/i18n.ts**: Internationalization setup.
  - **src/plugins/queryClient.ts**: Query client setup.
  - **src/plugins/router.ts**: Router setup.
- **src/queries**: Contains query-related files.
  - **src/queries/QueryKey.enum.ts**: Query key enumeration.
  - **src/queries/useFetchQuery.ts**: Fetch query hook.
- **src/router**: Contains routing-related files.
  - **src/router/routes**: Contains route definitions.
    - **src/router/routes/homeRoute.ts**: Home route definition.
    - **src/router/routes/index.ts**: Index route definition.
    - **src/router/routes/notFound.ts**: Not found route definition.
    - **src/router/routes/showRoute.ts**: Show route definition.
  - **src/router/routes.enum.ts**: Route enumeration.
- **src/services**: Contains service-related files.
  - **src/services/http**: HTTP service files.
    - **src/services/http/README.md**: Documentation for HTTP services.
    - **src/services/http/client/customFetch.ts**: Custom fetch client.
    - **src/services/http/errors/ResponseStatusError.ts**: Response status error.
    - **src/services/http/index.ts**: Index file for HTTP services.
    - **src/services/http/methods**: HTTP methods.
      - **src/services/http/methods/get.ts**: GET method.
      - **src/services/http/methods/index.ts**: Index file for methods.
      - **src/services/http/methods/post.ts**: POST method.
    - **src/services/http/types**: Type definitions.
      - **src/services/http/types/APIResponse.ts**: API response type.
      - **src/services/http/types/Endpoint.ts**: Endpoint type.
      - **src/services/http/types/RequestOptions.ts**: Request options type.
      - **src/services/http/types/index.ts**: Index file for types.
- **src/shims-vue.d.ts**: Vue shims for TypeScript.
- **src/stores/useShowsStore.ts**: Vue store for shows.
- **src/styles**: Contains SCSS style files.
  - **src/styles/\_default.scss**: Default styles.
  - **src/styles/\_list-transition.scss**: List transition styles.
  - **src/styles/\_remedy.scss**: Remedy styles.
  - **src/styles/boot.scss**: Boot styles.
- **src/util**: Utility files.
  - **src/util/setDocumentLang.ts**: Set document language utility.
  - **src/util/setLocalStorageLocale.ts**: Set local storage locale utility.
- **src/views**: Contains Vue views.
  - **src/views/HomeView.vue**: Home view component.
  - **src/views/NotFound.vue**: Not found view component.
  - **src/views/ShowView.vue**: Show view component.

## Tech

| Logo                                                                                                                       | Name           | Link                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------ |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript     | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript)   |
| <img height="70" src="https://vitejs.dev/logo.svg" alt="Vite logo">                                                        | Vite           | [https://github.com/vitejs/vite](https://github.com/vitejs/vite)                     |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3 logo">             | Vue 3          | [https://github.com/vuejs/core](https://github.com/vuejs/core)                       |
| <img height="70" src="https://vitest.dev/logo.svg" alt="Vitest logo">                                                      | Vitest         | [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)         |
| <img height="70" src="https://www.cypress.io/_astro/navbar-brand.D87396b0.svg" alt="Cypress logo">                         | Cypress        | [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)       |
| <img height="70" src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo">                                                  | Pinia          | [https://github.com/vuejs/pinia](https://github.com/vuejs/pinia)                     |
| <img height="70" src="https://vue-query.vercel.app/vue-query.svg" alt="TanStack Query logo">                               | TanStack Query | [https://github.com/tanstack/query](https://github.com/tanstack/query)               |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint         | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)                 |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier       | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)         |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="Sass logo">            | Sass           | [https://github.com/sass/sass](https://github.com/sass/sass)                         |
| <img height="70" src="https://vue-i18n.intlify.dev/vue-i18n-logo.png" alt="Vue i18n logo">                                 | Vue i18n       | [https://github.com/intlify/vue-i18n-next](https://github.com/intlify/vue-i18n-next) |

<pre>
.
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── home.cy.ts
│   │   └── show.cy.ts
│   ├── fixtures
│   │   └── data.json
│   ├── support
│   │   ├── commands.ts
│   │   ├── component-index.html
│   │   ├── component.ts
│   │   └── e2e.ts
│   └── tsconfig.json
├── cypress.config.ts
├── cypress.d.ts
├── env.d.ts
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── android-icon-144x144.png
│   ├── android-icon-192x192.png
│   ├── android-icon-36x36.png
│   ├── android-icon-48x48.png
│   ├── android-icon-72x72.png
│   ├── android-icon-96x96.png
│   ├── apple-icon-114x114.png
│   ├── apple-icon-120x120.png
│   ├── apple-icon-144x144.png
│   ├── apple-icon-152x152.png
│   ├── apple-icon-180x180.png
│   ├── apple-icon-57x57.png
│   ├── apple-icon-60x60.png
│   ├── apple-icon-72x72.png
│   ├── apple-icon-76x76.png
│   ├── apple-icon-precomposed.png
│   ├── apple-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── manifest.json
│   ├── ms-icon-144x144.png
│   ├── ms-icon-150x150.png
│   ├── ms-icon-310x310.png
│   └── ms-icon-70x70.png
├── src
│   ├── App.vue
│   ├── components
│   │   ├── genre-selector
│   │   │   └── GenreSelector.vue
│   │   ├── locale-changer
│   │   │   ├── LocaleChanger.vue
│   │   │   └── __tests__
│   │   │       └── LocaleChanger.cy.ts
│   │   └── show-card
│   │       └── ShowCard.vue
│   ├── components.d.ts
│   ├── const
│   │   └── locale.ts
│   ├── keycloak.ts
│   ├── locales
│   │   ├── en-US.json
│   │   └── zh-CN.json
│   ├── main.ts
│   ├── plugins
│   │   ├── i18n.ts
│   │   ├── queryClient.ts
│   │   └── router.ts
│   ├── queries
│   │   ├── QueryKey.enum.ts
│   │   └── useFetchQuery.ts
│   ├── router
│   │   ├── routes
│   │   │   ├── homeRoute.ts
│   │   │   ├── index.ts
│   │   │   ├── notFound.ts
│   │   │   └── showRoute.ts
│   │   └── routes.enum.ts
│   ├── services
│   │   └── http
│   │       ├── README.md
│   │       ├── client
│   │       │   └── customFetch.ts
│   │       ├── errors
│   │       │   └── ResponseStatusError.ts
│   │       ├── index.ts
│   │       ├── methods
│   │       │   ├── get.ts
│   │       │   ├── index.ts
│   │       │   └── post.ts
│   │       └── types
│   │           ├── APIResponse.ts
│   │           ├── Endpoint.ts
│   │           ├── RequestOptions.ts
│   │           └── index.ts
│   ├── shims-vue.d.ts
│   ├── stores
│   │   └── useShowsStore.ts
│   ├── styles
│   │   ├── _default.scss
│   │   ├── _list-transition.scss
│   │   ├── _remedy.scss
│   │   └── boot.scss
│   ├── util
│   │   ├── setDocumentLang.ts
│   │   └── setLocalStorageLocale.ts
│   └── views
│       ├── HomeView.vue
│       ├── NotFound.vue
│       └── ShowView.vue
├── tsconfig.json
└── vite.config.ts
</pre>
