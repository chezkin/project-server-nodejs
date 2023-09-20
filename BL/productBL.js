const funcDal = require('../DL/productsDL');


function getAllProducts(req, res) {
    return funcDal.allProducts();
}

function getProductID(id) {
    return funcDal.getProductID(id);

}

async function creatProduct(body) {
    const product = body.data;
    // try {
        // const value = await schema.validateAsync(product);
        product.created = body.user
        // throw ({message:"missing name from product", code : 422})
        return funcDal.creatProduct(product);
    // }
    // catch (err) { throw err; } 

}

async function updateProductID(body) {
    const product = body.data;
    try {
        // const value = await schema.validateAsync(product);
        return funcDal.updateProductID(product);
    } 
    catch (err) { throw err; }


}

function deleteProductID(id) {
    return funcDal.deleteProductID(id);
}

function moreProductID(id) {
    return funcDal.moreProductID(id);
}

function lessProductID(id) {
    return funcDal.lessProductID(id);
}




const jsonfile = require('jsonfile');
const path = require('path');
const axios = require('axios');

async function initDB() {
    try {
        const result = await axios.get('https://fakestoreapi.com/products')  
        const productsData = changeAPI(result.data);
        writeData(productsData);
        console.log('data base is a loaded');
    }  catch (err) { throw err; }
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

async function reloadData(req , res){
    try {
        return initDB()
    }  catch (err) { throw err; }
    
}

module.exports = {
    lessProductID,
    moreProductID,
    deleteProductID,
    updateProductID,
    creatProduct,
    getAllProducts,
    getProductID,
    reloadData,
    initDB,
}


const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number()
        .required(),

    title: Joi.string()
        .required(),

    description: Joi.string(),

    price: Joi.number()
        .required(),

    category: Joi.string(),

    image: Joi.string(),

    quantity: Joi.number()
        .required(),

    rating: {
        rate: Joi.number(),
        count: Joi.number(),
    },

});



