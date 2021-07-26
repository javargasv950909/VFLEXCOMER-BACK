/*
Ruta: /api/productos
*/
const {Router} = require('express');

const{getProductos} = require('../Controllers/productos');


const router = Router();

router.get('/',getProductos);


module.exports = router;