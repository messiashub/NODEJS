

// USAR AS FUNÇÕES CRIADAS NA  PASTA PACOTE

// 1 CRIAR UM PACOTE NESSA PASTA  COM O COMANDO NPM INIT NO NODE
// 2 INSTALAR O PACOTE "pacotes" COM AS FUNÇÕES  COMANDO NPM INSTALL  mais o caminho do pacote a ser instalado.

// 3 OBS: CASO TENHA APAGADO O PACOTE INSTALADO POR ACIDENTE , BASTA COMANDO NPM INSTAL SEM O CAMINHO E ELE É INSTALADO NOVAMENTE


// USANDO AS FUNÇÕES INSTALADAS

let calc = require('pacotes');

console.log(calc.multiplicacao(2 , 5));

console.log(calc.circulo(50));

console.log(calc.area_triangulo(500,10000));