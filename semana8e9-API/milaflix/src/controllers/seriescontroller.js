const seriesJson = require("../models/series.json")


const getAll = (request,response) =>{

    response.status(200).send(seriesJson)
}


const getById = (request, response) =>{

    let idRequest = request.query.id
    
    let idEncontrado = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(idEncontrado)
}
// colocar a rota
module.exports = {
    getAll,
    getById
}