const compression = require('compression');
const cors = require('cors');
/*
	compression, cors 가 없어도 동작한다 흠...
*/


const express = require('express');
const app = express();

const path = require('path');


app.use(express.static(path.join(__dirname, 'html')));

app.use((req, res, next) => {
    // middleware 중간에서 무언갈 할수 있다 req 와 res사이
    console.log('안녕!');
    next();
});

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