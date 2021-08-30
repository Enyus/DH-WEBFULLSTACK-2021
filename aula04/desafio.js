// Questionário (26/07/2021)
// Resolver as questões abaixo com o date-fns
// (caso queiram comparar, fazer as mesmas questões utilizando moment)
// 1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
// 2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
// 3) Adicionar 32 dias na data 20/03/2021
const { format, yearsToMonths } = require('date-fns')
var add = require('date-fns/add')
var formatDistanceStrict = require('date-fns/formatDistanceStrict')
var moment = require('moment')


// 1) Diferença de dias entre 15/09/2010 e 10/06/2020 com o date-fns
var resultado1 = formatDistanceStrict(
    new Date(2010, 08, 15),
    new Date(2020, 05, 10),
    { unit: 'day'}
)
console.log('1) A diferença em dias entre 15/09/2010 e 10/06/2020 com o date-fns é ' + resultado1)

// 2) Diferença de meses entre 15/09/2011 e 28/06/2021 com o date-fns
var resultado2 = formatDistanceStrict(
    new Date(2011, 08, 15),
    new Date(2021, 05, 28),
    { unit: 'month'}
)
console.log('2) A diferença em meses entre 15/09/2011 e 28/06/2021 com o date-fns é ' + resultado2)

// 3) Adicionar 32 dias a 20/03/2021 com o date-fns
var resultado3 = add(new Date(2021, 02, 20), {days: 32})
resultado3 = format(resultado3,'dd/MM/yyyy')
console.log('3) Adicionando 32 dias a 20/03/2021 com o date-fns temos o resultado ' + resultado3)

//---------------------------------------------------------------------------------------------------------------

// 4) Diferença de dias entre 15/09/2010 e 10/06/2020 com o moment
var resultado4 = moment('10 06 2020', 'DD MM YYYY').diff(moment('15 09 2010', 'DD MM YYYY'), 'days')
console.log('4) A diferença em dias entre 15/09/2010 e 10/06/2020 com o moment é ' + resultado4 + ' dias.')

// 5) Diferença de meses entre 15/09/2011 e 28/06/2021 com o moment
var resultado5 = moment('28 06 2021', 'DD MM YYYY').diff(moment('15 09 2011', 'DD MM YYYY'), 'months')
console.log('5) A diferença em meses entre 15/09/2011 e 28/06/2021 com o moment é ' + resultado5 + ' meses.')

// 6) Adicionar 32 dias a 20/03/2021 com o moment
var resultado6 = moment('20 03 2021', 'DD MM YYYY').add(32, 'days')
resultado6 = resultado6.format('DD/MM/YYYY')
console.log('6) Adicionando 32 dias a 20/03/2021 com o moment temos o resultado: ' + resultado6)