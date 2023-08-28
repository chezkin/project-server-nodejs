// with god help

// Create an object to handle HTTP requests
const http = require('http');

// Import the request management file to the server
const app = require('./app');

// Setting the port where the server will be established
const port = 3000;

// Setting up a server
const server = http.createServer(app);

// Setting the port where the server will be established
server.listen(port, () => {
    console.log(`server is listening in port ${port}`);
    initDB()  // ניתן להפעיל רק במצב משתמש ולא במצב מפתח
});

const jsonfile = require('jsonfile');
const path = require('path');
const axios = require('axios');

function initDB() {
    axios.get('https://fakestoreapi.com/products')
        .then((result) => {             
            const productsData = changeAPI(result.data);
            writeData(productsData);
            console.log('data base is a loaded');
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

async function writeData(_data) {
    await jsonfile.writeFile('./DL/dbProduct.json', _data, (err) => {
        if (err) throw err;
    });
    return 'The file has been saved!';
}

function changeAPI(products){
    const objData = {};
    products.forEach(element => {
        element.quantity =  Math.floor(Math.random() * (444 - 23 + 1)) + 23;
        element.created  = "22aa4bfd-df48-4be0-b0bc-0ae16832f735"        
    });
    objData.data = products;
    return objData
}