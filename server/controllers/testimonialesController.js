const Testimonial = require('../models/Testimonial');

exports.listTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll();

  res.render('testimoniales', {
    pagina: 'Testimoniales',
    testimoniales,
  });
};

exports.createTestimonial = async (req, res) => {
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
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje,
      pagina: 'Testimoniales',
      testimoniales,
    });
  } else {
    // almacenar en la base de datos
    await Testimonial.create({
      Nombre: nombre,
      Correo: correo,
      Mensaje: mensaje,
    });

    res.redirect('/testimoniales');
  }
};
