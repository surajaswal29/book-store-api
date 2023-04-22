// import express
const express = require('express');

// initializing express
const app = express();

app.use(express.json());

// importing routes
const book = require('./routes/bookRoutes');

app.use('/api/v1',book);


module.exports = app;