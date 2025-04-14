
# Frontend Test Assignment

This project is a frontend web application built using React, TypeScript, and Vite. The repository also integrates ESLint, Prettier, Husky, and Vitest for a smooth development workflow. Below you'll find the necessary steps to set up, run, and test the project.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Testing](#testing)
- [Login Credentials](#login-credentials)
- [Contributing](#contributing)

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Uttam25/Frontend-test-assignment.git
   cd Frontend-test-assignment
   ```

2. **Install dependencies**
   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

## Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

   This command will start a local development server. Visit `http://localhost:3000` in your browser to view the application.

2. **Lint the code**
   You can check and fix any linting errors using:
   ```bash
   npm run lint
   ```

3. **Formatting code**
   Use Prettier to format the code:
   ```bash
   npm run format
   ```

## Build

To create an optimized production build:
```bash
npm run build
```

This will generate a `dist/` folder with the production files.

## Testing

Run unit tests using Vitest:
```bash
npm run test
```

## Login Credentials

For testing purposes, use the following credentials to log into the app:

- **Username:** `admin`
- **Password:** `admin123`

Make sure to replace the login credentials with secure ones in a real-world application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
