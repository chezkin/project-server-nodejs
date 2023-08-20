const funcDal = require('../DL/funcDL');

module.exports = {
    getAllProducts: (req, res) => {
        return funcDal.allProducts();
    },

    getProductID: function (id) {
        return funcDal.getProductID(id);

    },

    creatProduct: (body) => {
        return funcDal.creatProduct(body);
        
    },

    updateProductID: (res, body, id) => {
        return funcDal.updateProductID(res, body, id);
    },

    deleteProductID: (id) =>{
        return funcDal.deleteProductID(id);

    },
    
    moreProductID: (id) =>{
        return funcDal.moreProductID(id);

    },
    
    lessProductID: (id) =>{
        return funcDal.lessProductID(id);

    },



}