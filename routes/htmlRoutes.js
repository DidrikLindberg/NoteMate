// Import the necessary modules
const express = require("express");
const router = express.Router();
const path = require("path");

// Route to handle GET requests to /notes endpoint and sends the notes.html file from the public folder as a response
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Route to handle GET requests to all other endpoints and sends the index.html file from the public folder as a response
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export the router for use in other files
module.exports = router;