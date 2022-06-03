const express = require("express");
const router = express.Router();
const LivrosController = require("../controllers/LivrosController");

router.get("/", LivrosController.listar);
router.put("/", LivrosController.editar);

module.exports = router;