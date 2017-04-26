const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    console.log(path.join(__dirname));
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.listen(8088, () => {
    console.log('Express App on port 8088!');
});