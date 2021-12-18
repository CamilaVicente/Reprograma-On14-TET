// centralizar o conteudo da aplicação
//rotas raizes
const express = require("express")//chamo o express
const cors = require("cors")//chamo o cors

// chamo a continuação das rotas
const filmeRoutes = require("./routes/filmesRoutes")
const seriesRoutes = require("./routes/seriesRoutes")

const app = express() // executo o express

app.use(cors())// uso o cors
app.use(express.json())// uso o bodyparser

// crio a rota raiz de filmes e executo a continuaçao de rotas
app.use("/filmes", filmeRoutes)

//crio rota raiz de series
app.use("/series", seriesRoutes)

//exportando para usar o server.js
module.exports = app