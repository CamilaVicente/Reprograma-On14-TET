const express = require("express");
const controller = require("../controller/escolasController");
const router = express.Router();

router.get("/escolas", controller.getAll);
router.get("/escolas/:id", controller.getId);
router.post("/cadastro", controller.cadastrar);
router.patch("/:id/like", controller.like);
router.patch("/:id/unlike", controller.unLike);
router.delete("/:id/remove", controller.removeEscola);
router.put("/:id/atualiza", controller.atualizacao);

module.exports = router;
