const sequelize = require("../config/database");
const Perfil = require("./perfil");

sequelize.sync();

module.exports = {
  sequelize,
  Perfil,
};