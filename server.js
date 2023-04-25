// require express
const express = require('express');
const path = require('path');
// Require the JSON file and assign it to a variable called noteData
const noteData = require('./db/db.json');


// Import the Express.js library and create an instance of it
const app = express();
// Set the port number to 300
const PORT = 3002;

// Serve static files in the 'public' folder
app.use(express.static('public'));


// Route to handle GET requests to /notes and sends the notes.html file as a response
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

// This route handles GET requests to the root URL and sends a message with a link to /api/notes as a response
app.get('/', (req, res) => res.send('Visit http://localhost:3001/api/notes'));

// Route to handle GET requests to /api/notes endpoint and sends the noteData object from the db.json file as a response
app.get('/api/notes', (req, res) => res.json(noteData));


// Define a route for the home page and send a response




// Start the server and listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);