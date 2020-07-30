const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viaje');
const Testimonial = require('../models/Testimonial');

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

  // Testimoniales GET
  router.get('/testimoniales', (req, res) => {
    Testimonial.findAll()
      .then((testimoniales) =>
        res.render('testimoniales', { pagina: 'Testimoniales', testimoniales })
      )
      .catch((err) => console.log(err));
  });

  // Tesmimoniales POST: cuando se llena el formulario
  router.post('/testimoniales', (req, res) => {
    // Validar Campos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];

    if (!nombre) {
      errores.push({ mensaje: 'Agrega tu Nombre' });
    }
    if (!correo) {
      errores.push({ mensaje: 'Agrega tu Correo' });
    }
    if (!mensaje) {
      errores.push({ mensaje: 'Agrega tu Mensaje' });
    }

    // Revisar Errores
    if (errores.length > 0) {
      //Muestra la vista con Errores
      res.render('testimoniales', {
        pagina: 'Testimoniales',
        errores,
        nombre,
        correo,
        mensaje,
      });
    } else {
      // almacenar en la base de datos
      Testimonial.create({
        Nombre: nombre,
        Correo: correo,
        Mensaje: mensaje,
      })
        .then(() => res.redirect('/testimoniales'))
        .catch((err) =>
          console.log('Ocurrió un error al crear un testimonial: ', err)
        );
    }
  });

  return router;
};
