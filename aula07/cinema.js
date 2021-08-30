let catalogo = require('./database/catalogo.json')

// console.log(catalogo)

function adicionarFilme(titulo,duracao,atores,ano,cartaz) {
    let filmeNovo = {};
    filmeNovo.codigo = catalogo.length;
    filmeNovo.titulo = titulo;
    filmeNovo.duracao = duracao;
    filmeNovo.atores = atores;
    filmeNovo.anoDeLancamento = ano;
    filmeNovo.emCartaz = cartaz;
    catalogo.push(filmeNovo)
}

adicionarFilme('Senhor dos Aneis',3,['Frodo', 'Gandalf'], 2000,false)

adicionarFilme('Homens de Preto',1.4,['Will Smith', 'pug top'], 2008,true)

// console.log(catalogo)

function buscarFilme (id) {
    for (i=0;i<catalogo.length;i++) {
        if (catalogo[i].codigo == id){
            return catalogo[i]
        }
    }
}

// console.log(buscarFilme(1))

function alterarStatusEmCartaz (id) {
    buscarFilme(id).emCartaz = !buscarFilme(id).emCartaz
}

// alterarStatusEmCartaz(0)
// console.log(catalogo)

// Função listarTodosOsFilmes
// A função deve percorrer toda a lista de filmes armazenada no catálogo
// utilizando o loop for e retornar as informações de maneira amigável ao usuário.

function listarTodosOsFilmes () {
    console.log('Lista de todos os filmes:')
    for (let item of catalogo) {
        console.log('Código do Filme: ' + item.codigo)
        console.log('Título do Filme: ' + item.titulo)
        console.log('Duração do Filme: ' + item.duracao)
        console.log('Atores Principais: ' + item.atores)
        console.log('Ano de Lançamento: ' + item.anoDeLancamento)
        console.log(item.emCartaz ? 'O filme está em cartaz? Sim' : 'O filme está em cartaz? Não')
        console.log('--------------------------------------------')
    }
}

// listarTodosOsFilmes()

// Função listarFilmesEmCartaz
// A função deve percorrer toda a lista de filmes armazenada no catálogo
// utilizando o loop for e retornar os filmes disponíveis em cartaz - as informações
// de maneira amigável ao usuário.

function listarFilmesEmCartaz () {
    console.log('Estes são os filmes atualmente em cartaz:')
    for (let item of catalogo) {
        item.emCartaz ? console.log(item.titulo) : ''
    }
}

// listarFilmesEmCartaz()

// Função alterarStatusEmCartazAlterada
// A função deve receber como parâmetro o número identificador do filme
// escolhido, buscar o filme com base no parâmetro recebido e alterar o status
// existente da propriedade emCartaz (se estava como true, alterar para false, e
// vice e versa).
// O escopo é igual ao da aula passada, porém o desafio é ao invés de usarmos a
// estrutura condicional if que estamos habituados, mudar para if ternário.

function alterarStatusEmCartazAlterada (id) {
    buscarFilme(id).emCartaz ? buscarFilme(id).emCartaz=!buscarFilme(id).emCartaz : buscarFilme(id).emCartaz=!buscarFilme(id).emCartaz
}

// alterarStatusEmCartazAlterada (3)
// console.log(catalogo)

// **Função listarFilmesLongaDuracao**
// Iremos agora filtrar os filmes que possuem duração longa. Crie a função
// listarFilmesDeLongaDuracao, retornando e exibindo para o usuário final
// todos os filmes do catálogo que possuem duração a partir de 2 horas

function listarFilmesDeLongaDuracao () {
    console.log('Estes são os filmes com duas horas ou mais de duração:')
    for (let item of catalogo) {
        item.duracao >= 2 ? console.log(item.titulo) : ''
    }
}

// listarFilmesDeLongaDuracao()

// Função listarTodosOsFilmesAlterada
// A função deve percorrer toda a lista de filmes armazenada no catálogo
// utilizando desta vez o método forEach() e retornar as informações de maneira
// amigável ao usuário.

function listarTodosOsFilmesAlterada () {
    console.log('Lista de todos os filmes:')
    catalogo.forEach(function(filme){
        console.log('Código do Filme: ' + filme.codigo)
        console.log('Título do Filme: ' + filme.titulo)
        console.log('Duração do Filme: ' + filme.duracao)
        console.log('Atores Principais: ' + filme.atores)
        console.log('Ano de Lançamento: ' + filme.anoDeLancamento)
        console.log(filme.emCartaz ? 'O filme está em cartaz? Sim' : 'O filme está em cartaz? Não')
        console.log('--------------------------------------------')
    })
}

// listarTodosOsFilmesAlterada()