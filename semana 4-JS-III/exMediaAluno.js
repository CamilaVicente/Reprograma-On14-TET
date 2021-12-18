// EXERCICIO: (UTILIZAR PARAMETRO) 
//CALCULE A MEDIA DO ALUNO

//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)


 
const calcularMedia = (nota1, nota2, nota3 , nota4) => {
    const media = (nota1 + nota2 + nota3 +nota4) / 4;
    

    if (media >= 7 ) {
        return console.log(`A media do aluno foi ${media} e o aluno está Aprovado`);
      } else {
        return console.log(`A media do aluno foi ${media} e o aluno está reprovado`);
      }

  
}

calcularMedia(5,8,5,3);
calcularMedia(7,9,8,10);

    