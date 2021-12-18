//3) estados-cidades.js apresente no console o estado,  a sigla e as cidades fora da array

    //### Transformando um Array em String
    //alunas = alunas.join(",");
    
const statesCities = require('./estados-cidades');


let estado = statesCities[0].estados;   // a variável estado vai receber as informações de cada objeto "estados" nas posições do array, começando com o [0].

for (let i = 0; i <= estado.length-1; i++) { 

  let estadosPesquisados = estado[i];
  
  console.table("Nome do estado: " + estadosPesquisados.nome);
  console.table("Sigla: " + estadosPesquisados.sigla);
  console.table("Cidades do estado: " + estadosPesquisados.cidades.toString());
  console.log("*****************************************************************")
}