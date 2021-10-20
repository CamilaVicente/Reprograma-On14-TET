/*exercicios
1)filmes.js 
   apresente no console o Title, Plot e Awards
 DESAFIO: Apresente Genre e Actors numa lista*/

 const movieList = require('./filmes');

 

 for(let i=0;i<= movieList.length-1;i++){

    let movie = movieList[i]
    let arrayMovie = [movie.Genre.split(" , "), movie.Actors.split(" , ")];

    console.table(`Title: ${movie.Title}`)
    console.table(`Plot: ${movie.Plot}`)
    console.table(`Awards: ${movie.Awards}`)
    console.table(arrayMovie)
    console.table("*************************************")



 }



 