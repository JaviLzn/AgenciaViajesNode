const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viaje');

module.exports = function () {
  // Index GET
  router.get('/', (req, res) => {
    res.render('index');
  });

  // Nosotros GET
  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      pagina: 'Sobre nosotros',
    });
  });

  // Viajes GET
  router.get('/viajes', (req, res) => {
    Viaje.findAll()
      .then((resviajes) => {
        res.render('viajes', {
          pagina: 'Próximos viajes',
          viajes: resviajes,
        });
      })
      .catch((err) => {
        console.log('Ocurrió un error al consultar viajes', err);
      });
  });

  return router;
};
