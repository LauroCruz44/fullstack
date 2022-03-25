// const somar = (numeroA,numeroB) => numeroA+numeroB;

// const calculadora = (numeroA,numeroB,operacao) => operacao(numeroA,numeroB);

// // console.log(calculadora(10,20,somar))

// console.log(calculadora(10,20,(numeroA,numberoB)=>numberoB-numeroA))

// function dobro(numero){
//     return numero*2
// }
// function triplo (numero){
//     return numero*3
// }
// function aplicar(numero,callback){
//     return callback(numero)
// }
// console.log(aplicar(3,dobro))
function adicionarHttp(url) {
    return "http://" + url
}

function processar(array,adicionarHttp,b){
    lista=[]
    for (let i = 0;i <array.length;i++){
        
         lista.push(adicionarHttp(array[i]))
         
    }return lista
}

console.log(processar(["www.yahoo.com.br","www.google.com"],adicionarHttp))