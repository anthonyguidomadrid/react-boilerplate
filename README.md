# React App Boilerplate

A simple and reusable React app boilerplate setup with TypeScript, Material UI, Redux, React Query, and i18n integration.

## Features

- **React 18** for the UI
- **TypeScript** for static type checking
- **Redux Toolkit** for state management
- **React Query** for data fetching and caching
- **Material UI** for styled components
- **i18next** for internationalization (i18n)
- **Testing** with **Jest** and **React Testing Library**
- **ESLint** and **Prettier** for code quality and style enforcement
- **React Router** for routing (if added in the future)

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (Recommended version: v16.x or above)
- **Yarn** (or npm, but yarn is recommended)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/react-app-boilerplate.git

    Navigate into the project directory:
   ```

cd react-app-boilerplate

Install dependencies:

    yarn install

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles the React app in production mode and optimizes the build for the best performance.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
You can run unit tests with Jest and React Testing Library.

### `yarn eject`

This command will eject your app from Create React App, providing full control over the configuration files.
**Note**: This is a one-way operation.

## Project Structure

src/
├── components/ # Reusable components
├── hooks/ # Custom React hooks
├── i18n/ # i18n setup and configuration
├── locales/ # Localization files for different languages
├── store/ # Redux store and slices
├── App.tsx # Main application component
├── index.tsx # Application entry point
├── index.css # Global styles
└── reportWebVitals.ts # Web vitals reporting

## Testing

The project comes preconfigured with Jest and React Testing Library for unit and component testing. The tests are placed in the same directory as the component being tested, using the `.test.tsx` file extension.

To run tests:

```bash
yarn test
```

## Linting and Formatting

This project uses ESLint and Prettier to ensure consistent code quality and formatting. You can run the following commands:

```bash
yarn lint
```

Runs ESLint to check for code issues.

```bash
yarn format
```

Formats the code using Prettier.

## Internationalization (i18n)

The project is set up with i18next for managing translations. All translation files are located in the `src/locales` folder. The i18next instance is configured in `src/i18n/i18n.ts`.

### To add a new language:

1. Add a new translation file in the `src/locales` folder.
2. Update the `i18n.ts` configuration if necessary.

### Setting the API Base URL:

You can define the `REACT_APP_API_BASE_URL` variable in your `.env` file:

```bash
REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com
```

This URL will be used as the base for making API requests in the application.

## Contributing

Feel free to fork this repository and create a pull request with your changes! For larger contributions, it's a good idea to discuss with the project maintainers first.

## Author

**Anthony Guido**

- GitHub: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

## License

Copyright © 2024 [Anthony Guido](https://github.com/anthonyguidomadrid/).

### Explanation of Sections:

1. **Features**: Lists the main libraries and tools integrated into the project.
2. **Prerequisites**: Specifies the tools you need to have installed (Node.js and Yarn).
3. **Installation**: Step-by-step instructions on how to set up the project.
4. **Available Scripts**: Describes the common commands you can run with Yarn (start, build, test, eject).
5. **Project Structure**: A basic overview of the file structure, helping new developers quickly understand where to place code.
6. **Testing**: Instructions for testing with Jest and React Testing Library.
7. **Linting and Formatting**: Information about ESLint and Prettier setup.
8. **Internationalization**: Explains how to manage translations with i18next.
9. **Contributing**: A simple guide for contributing to the repository.
10. **License**: Licensing information, which can be customized to your project's needs.
