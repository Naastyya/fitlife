const express = require('express');
const fs = require('fs'); // модуль для роботи з файловою системою
const path = require('path'); // модуль для роботи з шляхами файлів
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    // Вчитуємо вміст файлу index.html
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            // Якщо сталася помилка, відправте клієнту відповідь з кодом статусу 500
            res.status(500).send('Internal Server Error');
            return;
        }
        // Відправляємо вміст файлу index.html як відповідь на запит
        res.send(data);
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
