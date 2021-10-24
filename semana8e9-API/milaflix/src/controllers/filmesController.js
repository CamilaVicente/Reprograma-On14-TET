//controller vai ter a logica
//chamando o Json de filmes
const filmesJson = require("../models/filmes.json")

//funcao getAll retorna todos os filmes GET
const getAll = (request, response) => {

    response.status(200).json([{"filmes": filmesJson}])//retorna todos os filmes
}

//funcao getById retorna um filme de id especifico GET
const getById = (request, response) => {

    let idRequest = request.params.id

    let idEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(idEncontrado)//retorna pequisa por id
}

//funcao createMovie retorna a criação de um novo filllme POST
const createMovie = (request, response) => {

    let body = request.body

    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: body.Title,
        Plot: body.Plot
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [
            {
                "mensagem": "filme cadastrado com sucesso",
                novoFilme
            }
        ]
    )

}
//função que modifica o item expecifico PATCH atualiza somente o titulo do filme
const updateTitle = (request,response) =>{

    const idRequest = request.params.id
    let novoTitulo = request.body.Title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.Title = novoTitulo

    response.status(200).json(
        [
            {
                "mensagem": "Nome do filme atualizado com sucesso"
            }
        ]
    )
}
//PUT
const updateMovie = (request,response) =>{

    const idRequest = request.params.id
    let filmeResquest = request.body 
   
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    filmesJson.splice(indexEncontrado, 1,filmeResquest)

    response.status(200).json(
        [
            {
                "mensagem":"filme atualizado com sucesso",
                filmesJson
            }
        ]
    )

    
}
//função que deleta
 const deleteItem = (request,response) =>{



 }
// exportando todas as funcoes do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    getById,
    createMovie,
    updateTitle, 
    updateMovie
}