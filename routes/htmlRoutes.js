const express = require("express");
const note = express.Router();
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

note.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

note.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = note;