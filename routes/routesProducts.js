const express = require('express');
const router = express.Router();

const controllersProducts = require('../controllers/controllersProducts');

 

router.get('/all', controllersProducts.getAllProducts);

router.get('/:productID',controllersProducts.getProductID);

router.post('/add-product', controllersProducts.creatProduct);

router.put('/update', controllersProducts.updateProductID);

router.delete('/delete/:productID', controllersProducts.deleteProductID);

router.put('/more/:productID', controllersProducts.moreProductID);

router.put('/less/:productID',  controllersProducts.lessProductID);

module.exports = router;