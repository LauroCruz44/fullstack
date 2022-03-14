let frutas = ["maca","banana","jaca"];
let frutadois=['pera',"jaca","Abacaxi"];
let listacompleta = [...frutadois, ...frutas];

console.log(listacompleta)

let pessoa = {
    nome:"Pedro",
    Altura: 1.8,
}
let pessoaCompleta ={
    tel:12312321,
    ...pessoa
}
console.log(pessoaCompleta)

function letras(...parameters){
    console.log(parameters)
}
letras(1,2,3,4,5)
