const fs = require('fs');


const result = JSON.parse(fs.readFileSync('results.json'));
const db = {};

result.forEach(x => {
    const id = x.post.imdbURL.split('/')[4];
    db[id] = x.post;
});

fs.writeFileSync('db.json', JSON.stringify(db));