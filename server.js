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








// // Route to handle GET requests to /notes and sends the notes.html file as a response
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'));
//   });
// //   app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, './public/index.html'));
// // });


// // This route handles GET requests to the root URL and sends a message with a link to /api/notes as a response
// // app.get('/', (req, res) => res.send('Visit http://localhost:3001/api/notes'));

// // Route to handle GET requests to /api/notes endpoint and sends the noteData object from the db.json file as a response
// app.get('/api/notes', (req, res) => res.json(noteData));

// // Route to handle POST requests to /api/notes endpoint and sends the noteData object from the db.json file as a response

// // get the data from the request body, add it to noteData, then return the new noteData object as a response
// app.post('/api/notes', (req, res) => {
//     console.info(`${req.method} request received to add a note`);


//     let response;
    
//     //check if there is data in the request body
//     if (req.body) {
//         response = {
//             status: 'success',
//             data: req.body
//         };

//         //add a new note to the array
//         noteData.push(req.body);

//         //write the noteData array to the db.json file
//         fs.writeFileSync(
//             path.join(__dirname, './db/db.json'),
//             JSON.stringify(noteData, null, 2)
//         );
//         res.json(response);
//     } else {
//         res.json('Error in posting note');
//     }

// });
//      // Set the Content-Type header to application/json
//     //  res.setHeader('Content-Type', 'application/json');
     
//     // Destructuring assignment for the items in req.body
// //     const { title, text } = req.body;

// //     // If all the required properties are present
// //     if (title && text) {
// //         // Variable for the object we will save
// //         const newNote = {
// //             title,
// //             text,
// //         };

// //         // Obtain a unique id for the note
// //         const uniqueId = noteData.length + 1;
// //         // Add the unique id to the note object
// //         newNote.id = uniqueId;
// //         // Push the note object to the noteData array
// //         noteData.push(newNote);

// //         // Write the noteData array to the db.json file
// //         fs.writeFileSync(
// //             path.join(__dirname, './db/db.json'),
// //             JSON.stringify(noteData, null, 2)
// //         );

// //         // Return the new note as response
// //         res.json(newNote);
// //     } else {
// //         res.json('Error in posting note');
// //     }
// // });







// // Start the server and listen for incoming connections on the specified port
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );