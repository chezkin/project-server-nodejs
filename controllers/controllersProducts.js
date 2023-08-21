const productServer = require('../BL/productBL');



function getAllProducts(req, res) {
    productServer.getAllProducts()
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function getProductID(res, id) {
    productServer.getProductID(id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });

}

async function creatProduct(res, body) {
    console.log(body);
    // if (body.lenght !== 7) res.status(500).json('body must be 7 characters');
    productServer.creatProduct(body)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

async function updateProductID(res, body, id) {
    productServer.updateProductID(res, body, id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function deleteProductID(res, id) {
    productServer.deleteProductID(id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function moreProductID(res, id) {
    productServer.moreProductID(id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function lessProductID(res, id) {
    productServer.lessProductID(id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}
module.exports = {
    lessProductID,
    moreProductID,
    deleteProductID,
    updateProductID,
    creatProduct,
    getProductID,
    getAllProducts,

}

