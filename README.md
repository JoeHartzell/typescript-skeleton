# Template Project

This is a template for working with a Node.js typescript project. It includes basic configurations for the following:

1. [Eslint](https://eslint.org)
2. [EditorConfig](https://editorconfig.org)
3. [TypeScript](https://www.typescriptlang.org/docs/home.html)

## Getting Started

This project has several gulp commands that aid in tasks like linting, compiling, etc.. All of these commands are also exposed through NPM scripts.

| Gulp Command | NPM Script | Description |
| ------------ | ---------- | ----------- |
| $ gulp lint | $ npm run lint | Runs eslint with a 'stylish' formatter |
| $ gulp clean | $ npm run clean | Removes all files in the dist folder |
| $ gulp compile | $ npm run compile | Compiles the typescript and outputs to dist |
| $ gulp | $ npm run build | lints -> cleans -> and then compiles |

## Docker

This project includes a very basic .dockerignore file. This should be enough to get started but probably not sufficient for an enterprise application. Consider modifying this file as your project grows.
