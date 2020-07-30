const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

module.exports = new Sequelize(
  process.env.BD_NOMBRE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'postgres',
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
      freezeTableName: true,
    },
  }
);
