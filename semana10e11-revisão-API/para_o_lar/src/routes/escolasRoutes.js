const express = require("express");
const controller = require("../controller/escolasController");
const router = express.Router();

router.get("/escolas", controller.getAll);
router.get("/escolas/:id", controller.getId);

module.exports = router;