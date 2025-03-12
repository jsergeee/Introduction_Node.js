const http = require("http");

let homePageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    homePageViews++;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Главная</title>
                </head>
                <body>
                    <h1>Главная страница</h1>
                    <p>Количество просмотров: ${homePageViews}</p>
                    <a href="/about">Перейти на страницу "О нас"</a>
                </body>
            </html>
        `);
  } else if (req.url === "/about") {
    aboutPageViews++;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>О нас</title>
                </head>
                <body>
                    <h1>Страница "О нас"</h1>
                    <p>Количество просмотров: ${aboutPageViews}</p>
                    <a href="/">Вернуться на главную страницу</a>
                </body>
            </html>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>404 Not Found</title>
                </head>
                <body>
                    <h1>404 - Страница не найдена</h1>
                    <p>Извините, такой страницы не существует.</p>
                    <a href="/">Вернуться на главную страницу</a>
                    <br>
                    <a href="/about">Перейти на страницу "О нас"</a>
                </body>
            </html>
        `);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
