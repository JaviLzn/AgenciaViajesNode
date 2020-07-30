const Sequelize = require('sequelize');

const db = require('../config/database');

const Viaje = db.define('Viaje', {
        Titulo: {
            type: Sequelize.STRING,
        },
        Precio: {
            type: Sequelize.DECIMAL(19, 4),
        },
        FechaIda: {
            type: Sequelize.DATE,
        },
        FechaRegreso: {
            type: Sequelize.DATE,
        },
        UrlImagen: {
            type: Sequelize.STRING,
        },
        Descripcion: {
            type: Sequelize.STRING,
        },
        LugaresDisponibles: {
            type: Sequelize.STRING,
        },
    }
);

module.exports = Viaje;
