
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
