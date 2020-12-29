// MÓDULO COM FUNÇÕES

module.exports.area_quadrado = function quadrado(lado) {              // module.exports = EXPORTANDO O MODULO
    return lado * lado;
};

module.exports.area_retangulo = function retangulo(base, altura) {   // module.exports = EXPORTANDO O MODULO
    return base * altura;
};

module.exports.area_triangulo = function triangulo(base, altura) {   // module.exports = EXPORTANDO O MODULO
    return base * altura / 2;
};

module.exports.circulo = function circulo(raio) {                    // module.exports = EXPORTANDO O MODULO
    const pi = 3.1416;
    return pi * raio * raio;
}