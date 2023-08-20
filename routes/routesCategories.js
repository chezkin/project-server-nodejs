const express = require('express');
const router = express.Router();

const { controllersCategories } = require('../controllers/controllersCategories');



router.get('/', controllersCategories.getAllCategories);

router.get('/:categoryID', controllersCategories.getCategoryID);

router.post('/add-Category', controllersCategories.creatCategory);

router.put('/:editCategoryID', controllersCategories.editCategoryID);

module.exports = router;