var express = require('express');
var router = express.Router();

var HandleGenerator = require('../handlegenerator.js');
var middleware = require('../middleware.js');

HandleGenerator = new HandleGenerator();

/* GET home page. */
router.get('/', middleware.checkToken, HandleGenerator.index );
router.post('/login', HandleGenerator.login);

module.exports = router;
