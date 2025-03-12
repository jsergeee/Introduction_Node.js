# Random Password Generator

A simple library for generating random passwords.

## Installation
bash npm install random-password-generator

## Usage

javascript
const { generateRandomPassword } = require('random-password-generator');

const password = generateRandomPassword(16, { uppercase: true, lowercase: true, numbers: true, symbols: true });
console.log(password); // Example output: 'A1b2C3d4!E5f6G7h'

## Options

- `length`: Length of the password (default: 12)
- `uppercase`: Include uppercase letters (default: true)
- `lowercase`: Include lowercase letters (default: true)
- `numbers`: Include numbers (default: true)
- `symbols`: Include symbols (default: false)

## License

This project is licensed under the ISC License.
