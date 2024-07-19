
const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/submit_obituary', (req, res) => {
    const { name, date_of_birth, date_of_death, content, author } = req.body;
    const slug = name.toLowerCase().replace(/ /g, '-') + '-' + Date.now();
    
    const query = 'INSERT INTO obituaries (name, date_of_birth, date_of_death, content, author, slug) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [name, date_of_birth, date_of_death, content, author, slug], (err, results) => {
        if (err) {
            console.error(err);
            res.send('Error saving obituary: ' + err.message);
        } else {
            res.send('Obituary submitted successfully!');
        }
    });
});

module.exports = router;
