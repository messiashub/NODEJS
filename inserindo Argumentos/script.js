let args = process.argv.slice(2);

//console.log(args);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if(args[0] == 's'){
    c = soma(a ,b);
}else if(args[0] == 'm'){
    c = multiplica(a , b);
}else{
    c= 'opção inválida';
}

function soma(x, y) {
    return x + y;
}

function multiplica(x,y){
    return x * y;
}

console.log(c);

