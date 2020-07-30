const Viaje = require('../models/Viaje');

exports.listViajes =(req, res) => {
    Viaje.findAll()
      .then((Viajes) => {
        res.render('viajes', {
          pagina: 'Próximos viajes',
          Viajes: Viajes,
        });
      })
      .catch((err) => {
        console.log('Ocurrió un error al consultar viajes', err);
      });
  }

  exports.getViaje = (req, res) => {
    Viaje.findByPk(req.params.id)
      .then((resViaje) => {
        res.render('viaje', {
          pagina: resViaje.Titulo,
          viaje: resViaje,
        });
      })
      .catch((err) => {
        console.log(
          'Ocurrió un error al consultar viaje por id: ',
          req.params.id,
          err
        );
      });
    }