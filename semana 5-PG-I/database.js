//cria o array de objetos estudantes 

class Books {
  constructor(title, pages, gender, recommends, reads) {
    this.title = title
    this.pages = parseInt(pages)
    this.gender = gender
    this.recommends = recommends
    this.reads = reads
  }
}
const booksLists = [

  new Books('A culpa é das estrelas', 288, "ROMANCE", true, false),
  new Books('Crepusculo', 384, "ROMANCE", true, false),
  new Books('O Lado Bom da Vida', 304, "ROMANCE", true, true),
  new Books('O Vampiro que Descobriu o Brasil', 134, "ROMANCE", true, true),
  new Books('Pare de se sabotar e dê a volta por cima', 224, "AUTO AJUDA", true, true),
  new Books('Mindset - A Nova Psicologia do Sucesso', 210, "ROMANCE", true, true),
  new Books('A Sutil arte de Ligar o F*da-se', 224, "AUTO AJUDA", true, false),
  new Books('O Mundo de Sofia', 560, "ROMANCE", false, false),
  new Books('A Mulher do Viajante do Tempo', 546, "FICCAO", false, false),
  new Books('A Revolução dos Bichos', 152, "FICCAO", false, true),
  new Books('O Sol Também se Levanta', 294, "FICCAO", false, true),
  new Books('A Cabana', 240, "FICCAO", true, false)

]

//exporta o array de objetos estudantes
module.exports = booksLists