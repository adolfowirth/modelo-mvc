const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/compra', productosController.comprar);
router.get('/venta', productosController.vender);
router.get('/:num', productosController.detalle);

module.exports = router;