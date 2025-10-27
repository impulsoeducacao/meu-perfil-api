const { Perfil } = require("../models");

// GET all perfils
exports.getAll = async (req, res) => {
  const perfils = await Perfil.findAll();
  res.json(perfils[0]);
};