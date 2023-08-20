const express = require('express');
const router = express.Router();

const controllersUsers = require('../controllers/controllersUsers');


router.post('/sighnup', controllersUsers.sighnup);
router.post('/login', controllersUsers.login);


module.exports = router;