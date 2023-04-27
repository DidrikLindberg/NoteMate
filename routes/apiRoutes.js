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