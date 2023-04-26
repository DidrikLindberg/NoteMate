// This is a mini-app that only handles the /tips route
// it is imported into the main express app in server.js

const miniApp = require('express').Router();
// const miniApp = express.Router();
// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiRoutes');
// const feedbackRouter = require('./feedback');

// const app = express();

miniApp.use('/api/notes', apiRouter);
// miniApp.use('/feedback', feedbackRouter);

module.exports = miniApp;
