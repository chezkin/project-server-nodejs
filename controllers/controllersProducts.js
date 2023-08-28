const productServer = require('../BL/productBL');



function getAllProducts(req, res) {
    productServer.getAllProducts()
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function getProductID(req, res) {
    productServer.getProductID(req.params.productID)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });

}

async function creatProduct(req, res) {
    try {
        const data = await productServer.creatProduct(req.body)
        res.status(200).json(data)
    } catch (error) {
        { res.status(500).json(error.message) }
    };
}

async function updateProductID(req, res) {
        try {
            const data = await productServer.updateProductID(req.body)
            res.status(200).json(data)
        } catch (error) {
            { res.status(500).json(error,error.message) }
        };
}

function deleteProductID(req, res) {
    productServer.deleteProductID(req.params.productID)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function moreProductID(req, res) {
    productServer.moreProductID(req.params.productID)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
}

function lessProductID(req, res) {
    productServer.lessProductID(req.params.productID)
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

