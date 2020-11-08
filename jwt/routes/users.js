var express = require('express');
var router = express.Router();
var [getUsers, getUser] = require('../controller/user');

/* GET users listing. */
router.get('/:username', async function(req, res, next) {
  const usuarios = await getUser(req.params.username);
  res.send(usuarios);
});

module.exports = router;
