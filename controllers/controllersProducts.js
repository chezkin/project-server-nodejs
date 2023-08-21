const productServer = require('../BL/productBL');

module.exports = {

    getAllProducts: (req, res) => {
        productServer.getAllProducts()
            .then(data => res.status(200).json(data))
            .catch(_error => { res.status(500).json(_error.message) });
    },

    getProductID: (res, id) => {
        productServer.getProductID(id)
            .then(data => res.status(200).json(data))
            .catch(_error => { res.status(500).json(_error.message) });

    },

    creatProduct: async (res, body) => {
        console.log(body);
        // if (body.lenght !== 7) res.status(500).json('body must be 7 characters');
        productServer.creatProduct(body)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
    },

    updateProductID: async (res, body, id) => {
        productServer.updateProductID(res, body, id)
        .then(data => res.status(200).json(data))
        .catch(_error => { res.status(500).json(_error.message) });
    },

    deleteProductID: (res, id) => {
        productServer.deleteProductID(id)
            .then(data => res.status(200).json(data))
            .catch(_error => { res.status(500).json(_error.message) });
    },

    moreProductID: (res, id) => {
        productServer.moreProductID(id)
            .then(data => res.status(200).json(data))
            .catch(_error => { res.status(500).json(_error.message) });
    },

    lessProductID: (res, id) => {
        productServer.lessProductID(id)
            .then(data => res.status(200).json(data))
            .catch(_error => { res.status(500).json(_error.message) });
    },
}

