const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Pasang middleware CORS di awal, sebelum rute didefinisikan
app.use(cors());

// Rute utama
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Rute API
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});