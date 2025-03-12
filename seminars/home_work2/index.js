// index.js

function generateRandomPassword(length = 12, options = {}) {
  const {
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = false,
  } = options;

  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (characters.length === 0) {
    throw new Error("At least one character type must be selected.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

module.exports = {
  generateRandomPassword,
};
