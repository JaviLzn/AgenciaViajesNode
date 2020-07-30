const Testimonial = require('../models/Testimonial');

exports.listTestimoniales = (req, res) => {
    Testimonial.findAll()
      .then((testimoniales) =>
        res.render('testimoniales', { pagina: 'Testimoniales', testimoniales })
      )
      .catch((err) => console.log(err));
  }

  exports.createTestimonial = (req, res) => {
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
  }