# Frontend Agnes

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [License](#license)

## Introduction

Frontend Agnes is a personal portfolio website built to showcase projects, skills, and experiences. It is designed to be a simple, elegant, and responsive website using modern frontend technologies.

## Features

- Responsive design
- Project showcase
- Skillset overview
- Contact form
- Creating your own CV

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/frontendagnes/frontend-agnes.git
   cd frontend-agnes
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure the necessary environment variables:

   ```sh
   cp .env.example .env
   ```

4. Start the development server:

   ```sh
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

After setting up the project, you can explore the different sections of the portfolio website:

1. **Home:** Introduction and brief overview.
2. **Projects:** Showcase of various projects with descriptions and links.
3. **Skills:** List of technical skills.
4. **Contact:** Form to get in touch.
5. Creator CV:** (Optional) Creating your own CV

## Development

### Running Tests

To run tests, use the following command:

```sh
npm test
```

### Building for Production

To create a production build, use the following command:

```sh
npm run build
```

The production-ready files will be in the `build/` directory.

## Documentation

- [firebase](https://www.npmjs.com/package/firebase) - database (Deploy)

- [material-ui](https://material-ui.com/) - icons were used as well as a simple Snackbar common for showing notifications and useediaquery to create the RWD version

- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - navigation on the website

- [nanoid](https://www.npmjs.com/package/nanoid) - I create identifiers using this application

- [react-number-format](https://www.npmjs.com/package/react-number-format) - number input support and the use of a mask for these inputs

- [styled-components](https://styled-components.com/) - styling some components

- [classnames](https://github.com/JedWatson/classnames) - used to set two different CSS classes for one element depending on the state.

- [react-use-keypress](https://www.npmjs.com/package/react-use-keypress) - used to respond to pressing the key, the function was needed to hide the button on the page in my CV after pressing the "V" key, a button appears to print a CV to PDF.

- [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent) - The component used for information about the files nicely creates an information belt that can be stylized for your own needs.

- [react-scroll](https://www.npmjs.com/package/react-scroll) - used for Manu effects during scrolling

- [react-to-print](https://www.npmjs.com/package/react-to-print) - used to print generated cvs

## Contributing

- Source Code: https://github.com/frontendagnes/frontend-agnes
- Issue Tracker: [Issues · frontendagnes/frontend-agnes · GitHub](https://github.com/frontendagnes/frontend-agnes/issues)
- View: [Frontend @gnes](https://frontend-agnes.pl)

## License

This project is licensed under the Apache 2.0 License

## Author

Agnieszka Kamińska ([agnieszka.kaminska@ksiegarnia.edu.pl](mailto:agnieszka.kaminska@ksiegarnia.edu.pl))
