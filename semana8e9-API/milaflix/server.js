const express = require("express")

const app = express()

//const app = require("./src/app")

const PORT = 7080

app.listen(PORT, () =>{
    console.log(`Estamos trabalhando com a porta ${PORT}`)
})