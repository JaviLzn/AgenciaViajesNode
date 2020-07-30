const Sequelize = require('sequelize');

const db = require('../config/database');

const Testimonial = db.define('Testimonial', {
  Nombre: {
    type: Sequelize.STRING,
  },
  Correo: {
    type: Sequelize.STRING,
  },
  Mensaje: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimonial;
