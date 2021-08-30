const somar = require('./somar')
const subtrair = require('./subtrair')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

//2. Executar a função que permite somar e a função que permite subtrair, passando como argumentos dois números 
//quaisquer. Mostrar no console os resultados.
console.log(somar(1,2))
console.log(subtrair(1,2))

//3. Executar a função que permite multiplicar, passando como argumentos dois números
//quaisquer. Mostrar no console o resultado.
console.log(multiplicar(2,3))

//4. Executar a função que permite multiplicar, passando agora como um dos dois
//argumentos, o número zero. Mostrar no console o resultado.
console.log(multiplicar(0,1))

//5.  Executar a função que permite dividir, passando como argumentos dois números
//quaisquer. Mostrar no console o resultado.
console.log(dividir(6,3))

//6. Executar a função que permite dividir, passando agora como um dos dois argumentos,
//o número zero. Mostrar no console o resultado.
console.log(dividir(6,0))