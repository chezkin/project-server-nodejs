const funcDal = require('../DL/productsDL');


function getAllProducts(req, res) {
    return funcDal.allProducts();
}

function getProductID(id) {
    return funcDal.getProductID(id);

}

async function creatProduct(body) {
    const product = body.data;
    try {
        // const value = await schema.validateAsync(product);
        product.created = body.user

        return funcDal.creatProduct(product);
    }
    catch (err) { throw err; } 

}

async function updateProductID(body) {
    const product = body.data;
    try {
        const value = await schema.validateAsync(product);
    } 
    catch (err) { throw err; }

    return funcDal.updateProductID(product);
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

module.exports = {
    lessProductID,
    moreProductID,
    deleteProductID,
    updateProductID,
    creatProduct,
    getAllProducts,
    getProductID,
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



