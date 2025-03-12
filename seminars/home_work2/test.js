// test.js

const { generateRandomPassword } = require("./index");

const password = generateRandomPassword(16, {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
});
console.log(password);
