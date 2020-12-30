
// 1º ATRAVÉS DA LINHA DE COMANDO IDENTIFICAR O NOME DO ARQUIVO E O TAMANHO

// CAMINHO DO ARQUIVO

const sharp = require('sharp') // 3° IMPORTANDO A PASTA DO MÓDULO

let caminho = process.argv[2]; // OBS posição[0] = node, posição[1]= nome do projeto, posição[2] = caminho do aquivo de imagem 
let width = Number(process.argv[3]);

// 2° INSTALANDO UM MODULO EXTERNO PARA  REDIMENSIONAR A IMAGEM

function resize(caminho, width) {  // 3.1 Usando a pasta sharp
    sharp(caminho).resize({width:width})
    .toFile('./temp/loirinha.jpg',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Imagem redimensionada com sucesso!')
        }
    })
    
}

resize(caminho,width);
/* console.log(caminho, width); */