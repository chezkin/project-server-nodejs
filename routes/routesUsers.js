const express = require('express');
const router = express.Router();

const controllersUsers = require('../controllers/controllersUsers');

router.post('/login', controllersUsers.login);

router.post('/sighnup', controllersUsers.sighnup);



module.exports = router;