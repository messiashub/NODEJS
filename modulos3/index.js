//let calculo = require('./calc');


//console.log(calculo.soma(5,5)); // 10
//console.log(calculo.mult(5,10));  // 50


// OUTRA FORMA DE CHAMAR OU IMPORTAR

let calculo = require('./calc').mult;

console.log(calculo(3, 3));