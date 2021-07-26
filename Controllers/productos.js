const {response} = require('express'); 
const Producto = require('../Models/producto');

const getProductos = async(req, res) => {

    const productos = await Producto.find({},'id id_tienda nombre cantidad precio');
    res.json({
        ok: true,
        productos,
        id: req.id
    });
}

module.exports = {
    getProductos
}