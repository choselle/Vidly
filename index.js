const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Country' }
]

app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));