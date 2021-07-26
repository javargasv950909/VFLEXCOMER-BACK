const {Schema, model} = require ('mongoose');

const ProductoSchema = Schema({
    id_tienda: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    }
});

ProductoSchema.method('toJSON', function(){
   const {__v, _id, ...object} = this.toObject();
   object.id = _id;
   return object;
});

module.exports = model('Producto', ProductoSchema);