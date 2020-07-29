const Sequelize = require('sequelize');

module.exports = new Sequelize('AgenciaViajes', 'Javi', '123', {
  host: 'localhost',
  port: '1434',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});
