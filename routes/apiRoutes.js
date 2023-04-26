const note = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// POST Route for submitting notes
note.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit note`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    
    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            status : 'success',
            title,
            text,
        };

        // Obtain a unique id for the note
        const uniqueId = uuid();
        // Add the unique id to the note object
        newNote.id = uniqueId;
        // Push the note object to the noteData array
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});


module.exports = note;