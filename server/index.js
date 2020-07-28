// importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// configurar express
const app = express();

// habilitar pug
app.set('view engine', 'pug');


// Añadir las vista
app.set('views', path.join(__dirname, './views'));

// cargar las rutas
app.use('/', routes());


app.listen(3000);