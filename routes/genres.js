const express = require('express');
const router = express.Router();

const genres = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Country' }
]

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) res.status(404).send('The genre with the given ID was not found.');
    else res.send(genre);
});

router.post('/', (req, res) => {
    const result = validateGenre(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const genre = {
        id: genre.length = 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

router.put(':id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send('The genre with the given ID was not found.');
        return;
    }

    const result = validateGenre(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send('The genre with the given ID was not found');
        return;
    }

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(course);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).require()
    };

    return Joi.validate(course, schema);
}

module.exports = router;