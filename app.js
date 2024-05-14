const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

// Встановлюємо шлях до папки, в якій містяться статичні файли (стилі, зображення і т.д.)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
