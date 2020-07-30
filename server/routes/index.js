const express = require('express');
const router = express.Router();

/* Controllers */
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
  // router.use((req, res, next) => {
  //   res.status(404).send('404.html');
  //   next();
  // })

  // Index GET
  router.get('/', homeController.getHomePage );
  // Nosotros GET
  router.get('/nosotros', nosotrosController.infoNosotros );
  // Viajes GET
  router.get('/viajes', viajesController.listViajes);
  // Viaje GET by Id
  router.get('/viajes/:Id', viajesController.getViaje);
  // Testimoniales GET
  router.get('/testimoniales', testimonialesController.listTestimoniales);
  // Tesmimoniales POST: cuando se llena el formulario
  router.post('/testimoniales', testimonialesController.createTestimonial);

  return router;
};
