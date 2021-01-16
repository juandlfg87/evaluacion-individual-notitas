var express = require('express');
var router = express.Router();
var path = require('path');
const indexController = require (path.join('..', 'controllers','indexController.js'));

/* GET home page. */
router.get('/', indexController.indexGet);
router.post('/', indexController.indexPost);
router.delete('/:id', indexController.indexDelete);

module.exports = router;
