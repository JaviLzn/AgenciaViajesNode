const Viaje = require('../models/Viaje');

exports.listViajes = async (req, res) => {
  const Viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'Próximos viajes',
    Viajes
  });
};

exports.getViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.Id);
  res.render('viaje', {
    pagina: viaje.Titulo,
    viaje
  });
};
