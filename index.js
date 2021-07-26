const express = require('express');
require('dotenv').config();
var cors = require('cors');
const {dbConnection} = require('./Database/config');

// se inicializa el servidor de express

const app = express();

// configuracion del cors

app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// base de datos
dbConnection();

//rutas

app.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Inicio del servidor correcto'
    });
});

app.use('/api/productos',require('./Routes/productos'));


app.listen(process.env.PORT,() => {
    console.log("Servidor corriendo exitosamente en el puerto " + process.env.PORT);
});

