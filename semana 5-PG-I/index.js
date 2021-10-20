//vamos instanciar, o nosso banco de dados

// Importa o array de objetos que foi exportado da database.js
const booksLists = require('./database');

//como pegar entradas de pessoas usuárias no terminal
//1- eu preciso importar a ferramenta readline-sync
const pegarEntrada = require('readline-sync');

//ordenando por numero de paginas
booksLists.sort((a, b) => a.pages - b.pages);

function linha() {
     
        console.log("\n");
        console.log("~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
}

function apresentacao() {

    linha();
    console.log("              Projeto - Sistema de Livros")
    console.log("         ***Sistema de Recomendação de Livros***")
    console.log("  Este programa te dar dicas para uma leitura de boa qualidade.");
    console.log("                  Então Vamos lá???");
    linha();

}

function menuPesq() {

    console.log("Nossas opções para consulta de livros são: \n")
    console.log(' 1 - Genero Literário \n 2 - Recomendados \n 3 - Lidos Por Mim \n 4 - Lista de desejos \n 5 - Não Recomendados\n 6 - Todos os Livros \n')

    const option = pegarEntrada.question("Por favor escolha uma opcao para pesquisa : ").toLocaleUpperCase();

    if (option === "") {

        console.log("\n Por favor digite uma opcão válida \n")
        linha()
        return menuPesq();

    }

    switch (true) {

        case option === "1": {//Pesquisa por generos


            console.log("\n Os generos literarios disponiveis são: \n- Romance \n- Auto Ajuda \n- Ficcao \n ");

            const booksForGender = pegarEntrada.question('Qual genero deseja consultar? ').toUpperCase();
            linha()
            console.log("Esses são os livros disponiveis no genero escolhido: \n");

            const booksGender = booksLists.filter((book) => book.gender === booksForGender);
            console.table(booksGender);

            break;
        }

        case option === "2": {//Pesquisa por livros recomendados

            linha()
            console.log("\n Aqui segue algumas recomendações de livros : \n")
            

            const booksAprov = booksLists.filter((book) => book.recommends === true);
            console.table(booksAprov);

            break;

        }

        case option === "3": {//Lidos por mim

            linha()
            console.log("\n Estes são alguns livros lidos por mim : \n")

            const booksRead = booksLists.filter((book) => book.reads === true);
            console.table(booksRead);


            break;

        }
        case option === "4": {//Lista de Desejos
            
            linha()
            console.log("\n Está é minha Lista de Desejos : \n")

            const booksRead = booksLists.filter((book) => book.reads === false && book.recommends === true);
            console.table(booksRead);


            break;

        }
        case option === "5": {//Não Recomendados

            linha()
            console.log("\n Aqui segue alguns livros que a galera não recomenda : \n")

            const booksReprov = booksLists.filter((book) => book.recommends === false);
            console.table(booksReprov);

            break;

        }

        default:
            linha()
            console.log("\nEstes são todos os nossos livros disponiveis : \n");
            console.log("Ordenados pela quantidade de paginas : \n");
            console.table(booksLists)
    }


}
console.log(apresentacao())
console.log(menuPesq())