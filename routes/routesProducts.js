const express = require('express');
const router = express.Router();

const controllersProducts = require('../controllers/controllersProducts');

 

router.get('/all', controllersProducts.getAllProducts);

router.get('/:productID', (req, res) => controllersProducts.getProductID(res, req.params.productID));

router.post('/add-product', (req, res) => controllersProducts.creatProduct(res, req.body));

router.put('/update/:productID', (req, res) => controllersProducts.updateProductID(res, req.body, req.params.productID));

router.delete('/delete/:productID', (req, res) => controllersProducts.deleteProductID(res, req.params.productID));

router.put('/more/:productID', (req, res) => controllersProducts.moreProductID(res, req.params.productID));

router.put('/less/:productID', (req, res) => controllersProducts.lessProductID(res, req.params.productID));

module.exports = router;