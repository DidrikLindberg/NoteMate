// require express
const express = require('express');
const path = require('path');
// Require the JSON file and assign it to a variable called noteData
const fs = require('fs');


// Import the Express.js library and create an instance of it
const app = express();
// Set the port number to 3002
const PORT = 3002;

// Serve static files in the 'public' folder
app.use(express.static('public'));
// Middleware to parse URL-encoded data in request body
app.use(express.urlencoded({extended: true}));

// Middleware to parse JSON data in request body
app.use(express.json());


const htmlRoutes = require("./routes/apiRoutes.js");
app.use(htmlRoutes);
const apiRoutes = require("./routes/htmlRoutes.js");
app.use(apiRoutes);

// Listen on the specified port and log a message to the console
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});







