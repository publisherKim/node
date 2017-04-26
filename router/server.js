const route = require('./route.js');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const app = express();

app.use('/', route);

app.listen(8088, () => {
    console.log('Express App on port 8088!');
});