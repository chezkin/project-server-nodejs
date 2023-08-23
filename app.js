// Express object import
const express = require('express');
// Creating an express object named app
const app = express();
// Importing a MORGAN type object to manage writing to the console
const morgan = require('morgan');
//import object named 'path'
const path = require('path');

// Import into variables the router files
const usersRoutes = require('./routes/routesUsers');
const productsRoutes = require('./routes/routesProducts');
const categoriesRoutes = require('./routes/routesCategories');

// Creating a middleware that will write the status and time to the console in every request
app.use(morgan("dev"));

// Create Middleware // The function converts the request body to JSON format
app.use(express.json());

function requireLOG(req, res, next) {
    console.log(`${req.method} url:${req.url} at:${new Date()}`)
    next();
}
app.use(requireLOG);


// Creating middleware that sets the 'public' folder as static
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routes
// Creating middleware for each and every one of the routers
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);


// Creating a middleware to handle the case and the request does not match any path
// page not found 404
app.use((req, res, next) => {
    const error = new Error('page not found');
    error.status = 404;
    next(error);
});

// Creating middleware to handle any error case
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            error : error.message
        }
    });
});

// Export the APP file
module.exports = app;