const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser()); //Transformas todos os números inteiros da URL em Inteiros (normalmente vem como string)

server.listen(port, function () {
    console.log(`Backend is running on port ${port}.`);
});

module.exports = server;