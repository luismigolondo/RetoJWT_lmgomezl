var express = require('express');
var router = express.Router();
var [getProducts, deleteProduct] = require('../controller/product');
var checkToken = require('../middleware.js');
var Role = require('../helpers/role.js');

//Get todos los productos, todos lo pueden hacer
router.get('/', checkToken(), async function(req, res) {
  const productos = await getProducts();
  res.send(productos);
});

//Borra un producto, solo el admin y el dev pueden hacer esto
router.delete('/:producto', checkToken([Role.Admin, Role.Dev]), async function(req, res) {
  const deleteP = deleteProduct(req.params.producto);
  res.send({success: true, message: "Product deleted succesfully"});
});

module.exports = router;
