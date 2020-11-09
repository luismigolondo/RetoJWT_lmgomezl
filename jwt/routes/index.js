var express = require('express');
var router = express.Router();

var HandleGenerator = require('../handlegenerator.js');
var checkToken = require('../middleware.js');

HandleGenerator = new HandleGenerator();

/* GET home page. */
router.get('/', checkToken(), HandleGenerator.index );
router.post('/login', HandleGenerator.login);

module.exports = router;
