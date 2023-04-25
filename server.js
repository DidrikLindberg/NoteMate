// require express
const express = require('express');
const path = require('path');


// Import the Express.js library and create an instance of it
const app = express();
// Set the port number to 300
const PORT = 3002;

// Serve static files in the 'public' folder
app.use(express.static('public'));

// Define a route for the home page and send a response
// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));




// Start the server and listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);