const express = require('express');
const bodyParser = require('body-parser');
const submitObituaryRoute = require('./routes/submit_obituary');
const viewObituariesRoute = require('./routes/view_obituaries');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', submitObituaryRoute);
app.use('/', viewObituariesRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.on('error', (err) => {
    console.error('Server error:', err);
});