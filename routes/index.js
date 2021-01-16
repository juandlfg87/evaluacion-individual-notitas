var express = require('express');
var router = express.Router();
var path = require('path');
const indexController = require (path.join('..', 'controllers','indexController.js'));

/* GET home page. */
router.get('/', indexController.indexGet);

router.post('/', indexController.indexPost);

module.exports = router;
