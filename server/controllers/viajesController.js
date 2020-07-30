const Viaje = require('../models/Viaje');

exports.listViajes = async (req, res) => {
  const Viajes = await Viaje.findAll();

  res.render('Viajes', {
    pagina: 'Próximos viajes',
    Viajes: Viajes,
  });
};

exports.getViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  res.render('viaje', {
    pagina: viaje.Titulo,
    viaje
  });
};
