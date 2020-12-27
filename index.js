const express = require('express');
const cors = require('cors');
const fs = require('fs');


const app = express();
app.use(cors());
app.options('*', cors());
const port = process.env.PORT || 5000;

const db = JSON.parse(fs.readFileSync('db.json'));

app.get('/', async (req, res) => {
    res.redirect('https://malayalamsubtitles.org/');
});

app.get('/:id', async (req, res) => {
    if (!db[req.params.id]) {
        return res.status(404).send('Movie / Series Not Available !');
    }
    return res.json(db[req.params.id]);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
