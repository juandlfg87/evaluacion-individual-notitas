var express = require('express');
var router = express.Router();
var path = require('path');
const detailController = require (path.join('..', 'controllers','detailController.js'));

/* GET users listing. */
router.get('/', detailController.detail);

module.exports = router;
