const school = require("../models/escolas.json");

const getAll = (req, res) => {
  const { categoria, pagamento, bairro, ead } = req.query;

  let filtro = school;

  if (pagamento) {
    //Filtro pagamento
    filtro = filtro.filter((escola) => {
      return escola.pagamento.includes(pagamento);
    });
  }
  if (categoria) {
    //filtro categoria
    filtro = filtro.filter((escola) => {
      return escola.categoria == categoria;
    });
  }
  if (ead) {
    //filtro EAD
    filtro = filtro.filter((escola) => {
      return escola.ead == (ead == "true" ? true : false);
    });
  }
  if (bairro) {
    //filtro bairro
    filtro = filtro.filter((escola) => {
      return escola.bairro == bairro;
    });
  }

  res.status(200).send(filtro);
};

const getId = (req, res) => {
  const idSolicitado = req.params.id;

  const found = school.find((escola) => escola.id == idSolicitado);

  if (found == undefined) {
    res.status(404).send({
      message: "Estabelecimento não encontrado",
    });
  }
  res.status(200).send(found);
};

const cadastrar = (req, res) => {
  let body = req.body;

  let newSchool = {
    id: school.length + 1,
    likes: body.likes,
    nome: body.nome,
    categoria: body.categoria,
    endereço: body.endereço,
    numero: body.endereço,
    bairro: body.bairro,
    cidade: body.cidade,
    telefone: body.telefone,
    pagamento: body.pagamento,
    ead: body.ead,
  };

  if (!body.nome || !body.pagamento || !body.cidade || !body.categoria) {
    return res
      .status(400)
      .send({ mensagem: "Algum campo obrigatorio nao foi preenchido" });
  }

  if (body.nome.length > 10) {
    return res
      .status(400)
      .send({ mensagem: "voce ultrapassou o limite de 10 caracteres" });
  }

  school.push(newSchool);

  res.status(201).send(newSchool);
};

const like = (req, res) => {
  const { id } = req.params;

  const found = school.find((escola) => escola.id == id);

  if (found == undefined) {
    res.status(404).send({ message: "Escola não encontrada" });
  }
  found.likes += 1;

  res.status(200).send(found);
};

const unLike = (req, res) => {
  const { id } = req.params;

  const found = school.find((escola) => escola.id == id);

  if (found == undefined) {
    res.status(404).send({ message: "Escola não encontrada" });
  }
  found.likes -= 1;

  res.status(200).send(found);
};

const removeEscola = (req, res) => {
  const id = req.params.id; // const id = req.params.id

  const found = school.find((escola) => escola.id == id);

  if (found == undefined) {
    res.status(404).send({ message: "Escola não encontrado" });
  }

  const index = school.indexOf(found);

  school.splice(index, 1);

  res.status(200).send({ message: "Escola deletado" });
};

const atualizacao = (req, res) => {
  const idRequest = req.params.id;
  const bodyRequest = req.body;

  const found = school.find((escola) => escola.id == idRequest);

  if (found == undefined) {
    res.status(404).send({ message: "Escola não encontrado" });
  }

  bodyRequest.id = idRequest;

  Object.keys(found).forEach((informacao) => {
    if (bodyRequest[informacao] == undefined) {
      found[informacao] = found[informacao];
    } else {
      found[informacao] = bodyRequest[informacao];
    }
  });
  res.status(200).send(found);
};

module.exports = {
  getAll,
  getId,
  cadastrar,
  like,
  unLike,
  removeEscola,
  atualizacao,
};
