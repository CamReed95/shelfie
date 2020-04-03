const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express()

const { SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: {connectionString: CONNECTION_STRING}, ssl: {rejectUnauthorized: false}

})

app.use(express.json())

// place GET, POST, PUT, DELETE here

// console.log()

const port = 3001

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))