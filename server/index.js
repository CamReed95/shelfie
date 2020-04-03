const express = require('express');
const controller = require('controller');

const app = express()

app.use(express.json())

// place GET, POST, PUT, DELETE here

// console.log()

const port = 3001

app.listening(port, () => console.log(`listening on port ${port}`))