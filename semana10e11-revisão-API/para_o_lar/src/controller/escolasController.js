const school = require("../models/escolas.json");

const getAll = (req, res) => {

    const{ categoria ,pagamento , bairro , ead} = req.query

    let filtro = school

    if(pagamento) {//Filtro pagamento
        filtro = filtro.filter(escola =>{
            return escola.pagamento.includes(pagamento)
        })
    }
    if(categoria) {//filtro categoria
        filtro = filtro.filter(escola =>{
            return escola.categoria == categoria
        })
    }
    if(ead){//filtro EAD
        filtro = filtro.filter(escola => {
            return escola.ead == (ead == 'true' ? true : false)
        })
    }
    if(bairro) {//filtro bairro
        filtro = filtro.filter(escola =>{
            return escola.bairro == bairro
        })
    }

    res.status(200).send(filtro);
}

const getId = (req, res) => {
    const idSolicitado = req.params.id;

    const found = school.find((escola) => escola.id == idSolicitado);

    if (found == undefined) {
        res.status(404).send({
            message: "Estabelecimento não encontrado",
        })
    }
    res.status(200).send(found)
}












module.exports = {
    getAll,
    getId,
};