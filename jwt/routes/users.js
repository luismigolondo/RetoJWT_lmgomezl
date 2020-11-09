var express = require('express');
var router = express.Router();
var [getUsers, getUser, deleteUser] = require('../controller/user');
var checkToken = require('../middleware.js');
var Role = require('../helpers/role.js');

/* GET usuario, solo para la BD. */
router.get('/:username', async function(req, res) {
  const usuario = await getUser(req.params.username);
  res.send(usuario);
});

//Get todos los usuarios, solo lo puede hacer el admin y el developer
router.get('/', checkToken([Role.Admin, Role.Dev]), async function(req, res) {
  const usuarios = await getUsers();
  res.send(usuarios);
});

router.delete('/:username', checkToken(Role.Admin), async function(req, res) {
  const deleteU = deleteUser(req.params.username);
  res.send({success: true, message: "User deleted succesfully"});
});

module.exports = router;
