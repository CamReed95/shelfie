const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express()

app.use(express.json())

// place GET, POST, PUT, DELETE here

// console.log()

const port = 3001

app.listen(port, () => console.log(`listening on port ${port}`))