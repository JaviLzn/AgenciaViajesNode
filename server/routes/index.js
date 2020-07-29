const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viaje');

module.exports = function () {
  // router.use((req, res, next) => {
  //   res.status(404).send('404.html');
  //   next();
  // })

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
          listViajes: resviajes,
        });
      })
      .catch((err) => {
        console.log('Ocurrió un error al consultar viajes', err);
      });
  });

  // Viaje GET by Id
  router.get('/viajes/:id', (req, res) => {
    Viaje.findByPk(req.params.id)
      .then((resviaje) => {
        res.render('viaje', {
          pagina: resviaje.Titulo,
          viaje: resviaje,
          
        });
      })
      .catch((err) => {
        console.log(
          'Ocurrió un error al consultar viaje por id: ',
          req.params.id,
          err
        );
      });
  });

  return router;
};
