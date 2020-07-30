// importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');

const configs = require('./config');
const db = require('./config/database');

// Probar autenticacion a la base de datos
// db.authenticate()
//   .then(() => {
//     console.log('db conectada');
//   })
//   .catch((err) => {
//     console.log('db error: ', err);
//   });


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
  res.locals.ruta = req.path;
  return next();
});

// Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

// cargar las rutas
app.use('/', routes());

app.listen(3000);
