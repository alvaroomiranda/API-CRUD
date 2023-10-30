const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.post("/thoughts", ThoughtsController.createThought);

// router.get("/thoughts", ThoughtsController.findAllThoughts);

// Rota responsável por redirecionar para a página de cadastro do pensamento
router.get("/thoughts-create", ThoughtsController.registerThought);

router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/:id", ThoughtsController.findThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThough);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

router.post("/thoughts/remove/:id", ThoughtsController.deleteThought);

module.exports = router;
