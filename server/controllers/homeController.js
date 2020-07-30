const Viaje = require('../models/Viaje');
const Testimonial = require('../models/Testimonial');

exports.getHomePage = async (req, res) => {
  const Viajes = await Viaje.findAll({ limit: 3 });
  const testimoniales = await Testimonial.findAll({ limit: 3 });

  res.render('index', {
    pagina: 'Inicio',
    clase: 'home',
    Viajes,
    testimoniales,
  });
};
