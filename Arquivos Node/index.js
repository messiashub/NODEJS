
// IMPORTANDO MÓDULO ORIGINAL DO NODE


let fs = require('fs');

// CRIANDO UM ARQUIVO E ESCREVENDO  NELE

// writeFile()  -> três argumentos:
//        1- nome do arquivo 2- mensagem escrita no arquivo  3- função de callback


 fs.writeFile('teste.txt','Ola Mundo', function(error){
    if(error){throw error};

    console.log("Arquivo criado com sucesso!");
});

// RENOMEANDO UM ARQUIVO JA EXISTENTE

// 1-nome do arquivo a ser mudado 2-novo nome do arquivo  3-função de callback
 fs.rename('teste1','teste1.txt', function(error){
    if(error){throw error};
    
    console.log('Arquivo renomeado ,antes o  nome do arquivo era "teste1" agora é "teste1.txt"');
})
 
// LENDO UM ARQUIVO


fs.readFile('teste1.txt','UTF8', function(error, data){
    if(error){throw error};

    console.log(data);
}) 



// PEGANDO UM ARQUIVO E DEIXANDO SEU CONTEÚDO COM LETRAS MAIÚSCULAS
let argumentos =  process.argv.slice(2);

let nomeArquivo = argumentos[0];

fs.readFile(nomeArquivo, 'UTF8',(error, data)=>{
    if(error){throw error};

    fs.writeFile(nomeArquivo + "_UPPERCASE", data.toUpperCase(),(error)=>{
        if(error){throw error}

        console.log('Arquivo gerado com sucesso')
    })
})