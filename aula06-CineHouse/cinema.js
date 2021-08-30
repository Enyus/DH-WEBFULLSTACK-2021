let catalogo = [
    {
        codigo: 0,
        titulo: "Filme do Pelé",
        duracao: 1.5,
        atores: ['Pelé', 'Chespirito', 'Don Ramon'],
        anoDeLancamento: 1975,
        emCartaz: false
    },
    {
        codigo: 1,
        titulo: "Viúva Negra",
        duracao: 2,
        atores: ['Scarlet Johanson', 'Irmã Bonita', 'Pai estranho'],
        anoDeLancamento: 2021,
        emCartaz: true
    }
]
let objeto = JSON.stringify(catalogo)
console.log(objeto)

// function adicionarFilme(titulo,duracao,atores,ano,cartaz) {
//     let filmeNovo = {};
//     filmeNovo.codigo = catalogo.length;
//     filmeNovo.titulo = titulo;
//     filmeNovo.duracao = duracao;
//     filmeNovo.atores = atores;
//     filmeNovo.anoDeLancamento = ano;
//     filmeNovo.emCartaz = cartaz;
//     catalogo.push(filmeNovo)
// }

// // function adicionarFilme (titulo,duracao,atores,ano,cartaz) {
// //     this.codigo = catalogo.length;
// //     this.titulo = titulo;
// //     this.duracao = duracao;
// //     this.atores = atores;
// //     this.anoDeLancamento = ano;
// //     this.emCartaz = cartaz;
// // }

// // catalogo.push(new adicionarFilme('Senhor dos Aneis',3,['Frodo', 'Gandalf'], 2000,false))

// adicionarFilme('Senhor dos Aneis',3,['Frodo', 'Gandalf'], 2000,false)

// adicionarFilme('Homens de Preto',1.4,['Will Smith', 'pug top'], 2008,true)

// //console.log(catalogo)

// function buscarFilme (id) {
//     for (i=0;i<catalogo.length;i++) {
//         if (catalogo[i].codigo == id){
//             return catalogo[i]
//         }
//     }
// }

// // buscarFilme(1)

// function alterarStatusEmCartaz (id) {
//     buscarFilme(id).emCartaz = !buscarFilme(id).emCartaz
// }

// alterarStatusEmCartaz(0)
// // console.log(catalogo)