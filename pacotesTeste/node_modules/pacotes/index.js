
// PACOTES SÃO UM CONJUNTO DE UM OU VÁRIOS MÓDULOS
const operacoesBasicas = require('./operacoesBasicas'); // require = requisitando o pacote operaçõesBasicas
const areas = require('./areas');                       // require = requisitando o pacote areas


// Juntando os dois módulos em um só e exportando
module.exports = { ...operacoesBasicas, ...areas};  // exportando