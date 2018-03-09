const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/pizzas/', (req, res) => {
    const pizzasPath = path.join(__dirname, 'pizzas.json');
    const readable = fs.createReadStream(pizzasPath);
    readable.pipe(res);
});

app.get('/order/', (req, res) => {
    const orderPath = path.join(__dirname, 'order.json');
    const readable = fs.createReadStream(orderPath);
    readable.pipe(res);
});

app.listen(5000);
console.log('server running af http://localhost:5000/');
