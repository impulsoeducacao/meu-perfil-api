const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Perfil = sequelize.define("perfil", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  imagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Perfil;