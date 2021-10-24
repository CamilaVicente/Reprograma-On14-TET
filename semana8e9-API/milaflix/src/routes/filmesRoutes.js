// chama o controller de filmes
const controller = require("../controllers/filmesController")

const express = require("express")//chamo o express
const router = express.Router()// funcao de rotas do express
 

//router.metodo http (rota , funcao)
router.get("/filmes", controller.getAll)//retorna todos os filmes

router.get("/buscar/:id", controller.getById)//pesquisa por id

router.post("/criar", controller.createMovie)

router.patch("/update/:id", controller.updateTitle)

router.put("/update/:id", controller.updateMovie)




//exportando para ser usado no app.js
module.exports = router