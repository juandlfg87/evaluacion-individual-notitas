var express = require('express');
var router = express.Router();
var path = require('path');
const indexController = require (path.join('..', 'controllers','indexController.js'));

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
