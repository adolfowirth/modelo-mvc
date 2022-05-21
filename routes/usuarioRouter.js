const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/conectarse' , usuarioController.conectarse);
router.get('/registrarse', usuarioController.registrarse);

module.exports = router;