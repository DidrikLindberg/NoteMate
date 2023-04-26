const fs = require('fs');
const util = require('util');
const { v4: uuid } = require('uuid');

// Promisify the read and write file methods of the file system module
// This allows me to use promises instead of callbacks
const readASync = util.promisify(fs.readFile);
const writeASync = util.promisify(fs.writeFile);

// Create a class called Add
// This class will have methods to read, write, readAll, addNew, and deleteNote
class Add {
    read(){
        // Define a read method that reads a file asynchronously
        return readASync("db/db.json", "UTF-8")

    }
    write(payload){
        // Define a write method that writes a file asynchronously
        return writeASync("db/db.json", JSON.stringify(payload))
    }
    readAll(){
        // Define a readAll method that reads all the notes in a file and returns them as an array of JSON objects
        return this.read().then(notes => [...JSON.parse(notes)])
        
    }
    // Define a addNew method that creates a new note with a UUID, a title, and a text payload and appends it to the file
    addNew(payload) {
        let newNote = {
            id: uuid(),
            title: payload.title,
            text: payload.text
        }
        return this.readAll()
        .then(notes=> [...notes, newNote])
        .then(notes=> this.write(notes))
        .then(()=> this.read())
    }
    // Define a deleteNote method that deletes a note with the given id from the file
    deleteNote(id) {
        return this.readAll()
        .then(notes => notes.filter(note=> note.id !== id))
        .then(notes => this.write(notes))
        .then(() => this.read())
    }
}

// Export an instance of the Add class
module.exports = new Add();