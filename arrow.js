// const somar = () => console.log("Estou em uma arrow function")
// const somar = numero => console.log("Recebi um numero:"+numero)
const somar = (numero,numero2) => {
    console.log("Recebi um numero:"+numero)
    return numero+numero2
}
somar(13);
console.log(somar(13,23))

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" + data.getMinutes();
}
console.log(horaAtual())