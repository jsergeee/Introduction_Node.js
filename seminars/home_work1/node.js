var msg = "Hello World";
console.log(msg);
document.getElementById("message").textContent = msg;

var msg = "Hello World2"; // Переменная с сообщением
var newElement = document.createElement("h1"); // Создаем новый элемент h1
newElement.textContent = msg; // Устанавливаем текст
document.body.appendChild(newElement); // Добавляем элемент в body

var msg = "Hello World3"; // Переменная с сообщением
var template = document.getElementById("message-template");
var clone = document.importNode(template.content, true); // Клонируем содержимое шаблона
clone.querySelector("h1").textContent = msg; // Устанавливаем текст
document.body.appendChild(clone); // Добавляем клонированный элемент в body
