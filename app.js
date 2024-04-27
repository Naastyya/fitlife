const express = require('express')
const app = express()
const PORT = process.env.PORT || 80; // Use environment variable for port or default to 80

app.get('/', (req, res) => res.send('Hello Express'))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
