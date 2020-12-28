
console.log('Gerenciador Financeiro');

let cliente = "Claudinei messias";

console.log(`Cliente: ${cliente}`);

let valorProduto = '100';
let valorDesconto = '95';

let descontoFunc = require("./modulo/calcDesconto")
// require -> Para importar  módulo

let valorFinal = descontoFunc(valorProduto,valorDesconto);
console.log(`Valor final do produto: ${valorFinal}`)