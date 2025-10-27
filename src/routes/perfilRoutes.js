const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfilController");

router.get("/perfis", perfilController.getAll);

module.exports = router;