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
//   app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });


// This route handles GET requests to the root URL and sends a message with a link to /api/notes as a response
// app.get('/', (req, res) => res.send('Visit http://localhost:3001/api/notes'));

// Route to handle GET requests to /api/notes endpoint and sends the noteData object from the db.json file as a response
app.get('/api/notes', (req, res) => res.json(noteData));

// Route to handle POST requests to /api/notes endpoint and sends the noteData object from the db.json file as a response

// get the data from the request body, add it to noteData, then return the new noteData object as a response

// route to add a new note and add it to the json file
app.post("/api/notes", async function (req, res) {
    const currentNotes = await noteData.readNotes();
    let newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };
  
    await noteData.addNote([...currentNotes, newNote]);
  
    return res.send(newNote);
  });
// app.post('/api/notes', (req, res) => {

//      // Set the Content-Type header to application/json
//      res.setHeader('Content-Type', 'application/json');
     
//     // Destructuring assignment for the items in req.body
//     // const { title, text } = req.body;

//     // If all the required properties are present
//     if (title && text) {
//         // Variable for the object we will save
//         const newNote = {
//             title,
//             text,
//         };

//         // Obtain a unique id for the note
//         const uniqueId = noteData.length + 1;
//         // Add the unique id to the note object
//         newNote.id = uniqueId;
//         // Push the note object to the noteData array
//         noteData.push(newNote);

//         // Write the noteData array to the db.json file
//         fs.writeFileSync(
//             path.join(__dirname, './db/db.json'),
//             JSON.stringify(noteData, null, 2)
//         );

//         // Return the new note as response
//         res.json(newNote);
//     } else {
//         res.json('Error in posting note');
//     }
// });







// Start the server and listen for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);