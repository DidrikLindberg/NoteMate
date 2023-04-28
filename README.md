# noteMate

[![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)](https://www.javascript.com/)
[![Express](https://img.shields.io/badge/Express.js-gray?style=rounded-square)](https://expressjs.com/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-green)](https://nodejs.org/en)



## [Deployed Site](https://notemate.herokuapp.com/notes)

  ## Description
  This is a simple note-taking application built using Node.js and Express.js on the backend and HTML, CSS, and JavaScript on the frontend. The application allows users to write and save notes, as well as delete existing notes. The backend is served through the server.js file, which uses express to create a server and listen for incoming requests on port 3002. The routes folder contains two separate files that handle the server's different endpoints: apiRoutes.js and htmlRoutes.js.

  To use the application, users can navigate to the /notes endpoint, or click on "Get Started" and start writing and saving notes. The application stores the notes in a local database, which can be accessed through the API endpoints at /api/notes.

  ## Table of Contents

  * [Usage](#usage)

  * [License](#license)

  * [Code-Highlights](#Code-Highlights)

  * [Contributing](#contributing)

  * [Questions](#questions)

  ## Preview of Deployed Site
  ![img](/assets/imgs/NoteMate.jpg)

  ## Api/Notes Endpoint
  ![img](/assets/imgs/apinotes.jpg)



  ## Usage
  With NoteMate, users can easily create, edit, and delete notes, and access their notes from any device with an internet connection. 

  ## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  This project is licensed under the MIT License

  ## Code-Highlights
  This code sets up a modular routing system using the Express.js framework. It imports the Router function and two modular routers for handling API and HTML requests. It then uses middleware to direct incoming requests to the appropriate router based on their URL path. Finally, it exports the configured miniApp for use in other files.

  ```java
// Import the Router function from the express module
const miniApp = require('express').Router();

// Import the modular routers for /api and /notes
const apiRouter = require('./apiRoutes');
const htmlkRouter = require('./htmlRoutes');

// Set up the middleware to use the /api and /notes routers
miniApp.use('/api', apiRouter);
miniApp.use('/notes', htmlkRouter);

// Export the miniApp for use in other files
module.exports = miniApp;
  ```



  This code defines a class called "Add" with four methods: "read", "write", "readAll", "addNew", and "deleteNote".
  ```java
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
```
This code is a POST endpoint handler for the "/api/notes" route. When a POST request is sent to this route, it calls the addNew() function from the add module to add a new note to the database file. If the function is successful, it sends the newly created note data as a JSON response. If there are any errors, it logs the error to the console.
```java
router.post("/api/notes", function (req, res) {
// Call the addNew() function from the add module, which adds a new note to the db file
// If the function is successful, send the newly created note data as a JSON response, if there are error return the error

add
  add
    .addNew(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => console.log(err));
});
```



  ## Contributing
  Not accepting contributions at this time

  ## Learning Points
  * Node.js and Express.js 
    * I had to incorporate both node and express frameworks to build the web app
  * Router module
    * Created modular routes for handling client side requests to the server side
  * Middleware
    * I used middleware to parse the request body data(JSON and URL-encoded)
  * uuid
    * I utilized the uuid package to generate uniwue IDs for each note to be able to delete the correct note

  * Heroku
    * I deployed my app with Heroku
  ## Questions
  If you have any questions about the repo, you may open an issue or [contact me directly](mailto:lindberg.didrik@gmail.com). You can find more of my work at https://github.com/DidrikLindberg


