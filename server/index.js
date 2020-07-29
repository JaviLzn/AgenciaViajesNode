// importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

const configs = require('./config');

// configurar express
const app = express();

// habilitar pug
app.set('view engine', 'pug');

// Añadir las vista
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
// se le indica a express donde van a estar los archivos estaticos
app.use(express.static('public'));

// Validar en que ambiente estamos
const config = configs[app.get('env')];

// Creamos la variable para el sitio web
app.locals.titulo = config.nombreSitio;

// Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  return next();
});

// cargar las rutas
app.use('/', routes());

app.listen(3000);
