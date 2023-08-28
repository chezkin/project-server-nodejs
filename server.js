// with god help

// Create an object to handle HTTP requests
const http = require('http');

// Import the request management file to the server
const app = require('./app');

// Setting the port where the server will be established
const port = 3000;

// Setting up a server
const server = http.createServer(app);


const productService = require('./BL/productBL');
// Setting the port where the server will be established
server.listen(port, async () => {
    console.log(`server is listening in port ${port}`);
    try {
        const result = await productService.initDB() 
    }  catch (err) { throw err; }
     // ניתן להפעיל רק במצב משתמש ולא במצב מפתח
});
