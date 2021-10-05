const path = require('path')
const fs = require('fs')

function armazenaRegistro (array, arquivo) {
    let conteudoString = JSON.stringify(array);
    let caminhoArquivo = path.join('data', arquivo)
    fs.writeFileSync(caminhoArquivo, 'module.exports = ')
    fs.appendFileSync(caminhoArquivo, conteudoString)
}

module.exports = armazenaRegistro