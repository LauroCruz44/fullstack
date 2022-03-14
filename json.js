let pessoa={
    nome:"Lauro",
    idade:35,
    altura:1.78
}
let json = JSON.stringify(pessoa)

console.log(json)

let arraydenov =JSON.parse(json)

console.log(arraydenov)

console.log(json[0])
console.log(arraydenov[0])