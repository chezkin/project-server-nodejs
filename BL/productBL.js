const funcDal = require('../DL/productsDL');


function getAllProducts(req, res) {
    return funcDal.allProducts();
}

function getProductID(id) {
    return funcDal.getProductID(id);

}

function creatProduct(body) {
    return funcDal.creatProduct(body);

}

function updateProductID(res, body, id) {
    return funcDal.updateProductID(res, body, id);
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