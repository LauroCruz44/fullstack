let listaNumeros = [1,2,3,4,5,6];

//map

let listaNumeroDobro =listaNumeros.map(function (valor,index) {
    return valor*2;
})
console.log(listaNumeroDobro)

// filter

let listaNumerosFiltrados = listaNumeros.filter(function(valor,index){
    return valor > 2;
})
console.log(listaNumerosFiltrados)

//reduce

let listaNumerosSomados = listaNumeros.reduce(function(resultado,valor){
    return resultado + valor;
})
console.log(listaNumerosSomados)

//forEach

listaNumeros.forEach(function(valor,index){
    console.log(" O valor e " + valor + " E sua posicao e: " + index)
})