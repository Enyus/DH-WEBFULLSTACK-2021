function dividir(x,y){
    if(y==0){
        return "Não se pode dividir por zero"
    } else {
        return x/y
    }
}

//console.log(dividir(0,2))
//console.log(dividir(6,3))
//console.log(dividir(4,0))

module.exports = dividir