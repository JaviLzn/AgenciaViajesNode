const Viaje = require('../models/Viaje');
const Testimonial = require('../models/Testimonial');

exports.getHomePage = (req, res) => {
    // Para varias devolver varias consultas a la misma vista
    // se hace un arreglo de promises
    const arrPromesas = [];

    arrPromesas.push(Viaje.findAll({ limit: 3 }));
    //arrPromesas.push(Testimonial.findAll({ limit: 3 }));

    const resultado = Promise.all(arrPromesas);

    resultado
      .then((result) => {
        res.render('index', {
          pagina: 'Inicio',
          clase: 'home',
          Viajes: result[0]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }