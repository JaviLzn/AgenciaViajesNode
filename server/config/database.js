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
  },
  define: { 
    //Evita el uso obligatorio de los campot createAt y updateAt en el modelo 
    // y en las consultas 
    timestamps: false,
  },
});
