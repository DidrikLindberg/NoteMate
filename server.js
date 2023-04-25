// require express
const express = require('express');
const path = require('path');


// create express app
const app = express();
const PORT = 3002;

// 
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

