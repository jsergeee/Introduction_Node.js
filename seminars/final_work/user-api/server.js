const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Используем body-parser для обработки JSON
app.use(bodyParser.json());

// Путь к файлу с пользователями
const usersFilePath = path.join(__dirname, "users.json");

// Функция для чтения пользователей из файла
function readUsersFromFile() {
  if (!fs.existsSync(usersFilePath)) {
    return [];
  }
  const data = fs.readFileSync(usersFilePath, "utf-8");
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Ошибка парсинга JSON:", error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
}



// Функция для записи пользователей в файл
function writeUsersToFile(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
}

// Обработчик для корневого пути
app.get("/", (req, res) => {
  res.send(
    "Добро пожаловать в API пользователей! Используйте /users для работы с пользователями."
  );
});

// Получение всех пользователей
app.get("/users", (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

// Получение пользователя по ID
app.get("/users/:id", (req, res) => {
  const users = readUsersFromFile();
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }
  res.json(user);
});

// Создание нового пользователя
app.post("/users", (req, res) => {
  const users = readUsersFromFile();
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1, // Генерация ID
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json(newUser);
});

// Обновление пользователя
app.put("/users/:id", (req, res) => {
  const users = readUsersFromFile();
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const updatedUser = {
    id: parseInt(req.params.id),
    name: req.body.name,
    email: req.body.email,
  };
  users[userIndex] = updatedUser;
  writeUsersToFile(users);
  res.json(updatedUser);
});

// Удаление пользователя
app.delete("/users/:id", (req, res) => {
  const users = readUsersFromFile();
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  users.splice(userIndex, 1);
  writeUsersToFile(users);
  res.status(204).send();
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
