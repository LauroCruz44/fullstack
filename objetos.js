let pais ={
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade:function(){
        // console.log("Sou do brasil") como nao tem retorno envia msg undefined
        return "Sou do " + this.nome;
    }
};

console.log(pais.nacionalidade())
// console.log(pais.nome)
// console.log(pais["capital"])

let carro = {
    marca:"Fiat",
    modelo: "Uno",

};

function Carro(valorMarca , valorModelo) {
    this.marca = valorMarca;
    this.modelo = valorModelo;

}

console.log(carro)
console.log(new Carro("Renault","Clio"))
