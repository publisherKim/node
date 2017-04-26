const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html'));

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.listen(8088, () => {
    console.log('Express App on port 8088!');
})