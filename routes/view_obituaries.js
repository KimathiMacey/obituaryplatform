// route/view_obituaries.js
const express = require('express');
const router = express.Router();
const db = require('../config/database'); 

// Route to display all obituaries
router.get('/view_obituaries', (req, res) => {
    const sql = 'SELECT * FROM obituaries ORDER BY submission_date DESC'; // Fetch obituaries in descending order of submission date

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching obituaries:', err);
            res.status(500).send('Error retrieving obituaries.');
        } else {
            // Render the obituaries using an HTML template
            res.render('views_obituaries', { obituaries: results });
        }
    });
});

module.exports = router;
