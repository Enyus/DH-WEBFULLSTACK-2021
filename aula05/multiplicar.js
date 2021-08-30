function multiplicar(x,y) {
    if (x==0 || y==0) {
        return 0
    } else {
        return x*y
    }
}

//console.log(multiplicar(0,2))
//console.log(multiplicar(2,3))
//console.log(multiplicar(4,0))

module.exports = multiplicar