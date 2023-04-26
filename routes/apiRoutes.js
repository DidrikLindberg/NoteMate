// Import the express library and create a new router instance
const express = require("express");
const router = express.Router();
// Import the add module from the db folder
const add = require("../db/add");

// API GET Request at '/api/notes'

router.get("/api/notes", function (req, res) {
  // Call the readAll() function from the add module, which returns all the notes from the db file
  // If the function is successful, send the notes data as a JSON response, if there are error return the error

  add
  add
    .readAll()
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

// API POST Requests route at 'api/notes'

router.post("/api/notes", function (req, res) {
// Call the addNew() function from the add module, which adds a new note to the db file
// If the function is successful, send the newly created note data as a JSON response, if there are error return the error

add
  add
    .addNew(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

// Create a DELETE route at '/api/notes/:id'
// call the deleteNote() function from the add module, which deletes a note from the db file, passing in the id of the note to be deleted
// If the function is successful, send the notes data as a JSON response, if there are error return the error

router.delete("/api/notes/:id", function (req, res) {
  add
    .deleteNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});

// Export the router module for use in other files
module.exports = router;







































// const note = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');
// const db = require('../db/db.json');

// note.get('/api/notes', (req, res) => res.json(db)); 
    


// // POST Route for submitting notes
// note.post('/notes', (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to submit note`);

//     // Destructuring assignment for the items in req.body
//     const { title, text } = req.body;
    
//     // If all the required properties are present
//     if (title && text) {
//         // Variable for the object we will save
//         const newNote = {
//             status : 'success',
//             title,
//             text,
//         };

//         // Obtain a unique id for the note
//         const uniqueId = uuid();
//         // Add the unique id to the note object
//         newNote.id = uniqueId;
//         // Push the note object to the noteData array
//         readAndAppend(newNote, './db/db.json');

//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         res.json(response);
//     } else {
//         res.json('Error in posting note');
//     }
// });


// module.exports = note;