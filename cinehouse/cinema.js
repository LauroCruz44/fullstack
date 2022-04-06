// let filme1 = {
//    codigo:1,
//     titulo:' Velozes e furiosos',
//     duracao:1.51,
//     atores:['Ator1','Ator2','Ator3'],
//     anoLancamento:2000,
//     emCartaz: false,
//     atores:[{nome:'Ator1',idade:50,altura:1.80},'Ator2','Ator3']
// }

// let filme2 = {
//    codigo:2,
//    titulo:' Velozes e furiosos 2',
//    duracao:1.1,
//    atores:['Ator1','Ator2','Ator3'],
//    anoLancamento:2010,
//     emCartaz: false,
// }


// let filme3 = {
//    codigo:3,
//    titulo:'Velozes e Furisos3',
//     duracao:1,
//     atores:['Ator2','Ator4',' Ator5'],
//     anoLancamento:2013,
//     emCartaz:true,
// }
// console.log(filmes3)
// let filmes =[filme1,filme2,]

// let filmes=[]
// filmes.push(filme2)
// filmes[0].atores.push('Ator5')
// const retornoPush =filmes.unshift(filme1)//coloca na primeira poscao
// const retornoPush =filmes.push(filme1,filme2)
// console.log(filmes)

// const teste =[1,2,3,4,5]
// console.log(teste.indexOf(3))

// let catalogo =[]
// function adicionarFilme(array){
//    catalogo.push(array)
// }

// adicionarFilme([filme1,filme2,filme3])
// console.log(catalogo)


//function buscarFilme(numero){
  //  for(let i=0;i<catalogo.length;i++){
    //    if(catalogo[i].codigo === numero){
      //      return catalogo[i]
        //}
    //}
//}
//buscarFilme(1)
//console.log(buscarFilme)

//function adicionarFilme(filme){
  //  catalogo.push(filme)
//}

//function buscarFilme(codigo){
  //  for(let i = 0; i < catalogo.length; i++){
 //       if(catalogo[i].codigo === codigo) {
   //         return catalogo[i]
     //   }
    //}
//}

//function alterarStatusEmCartaz1(codigo){
  //  for(let i = 0; i < catalogo.length; i++){
    //    if(catalogo[i].codigo === codigo) {
      ////      if(catalogo[i].emCartaz === true){
          //      catalogo[i].emCartaz = false
           // }
            //else {
             //   catalogo[i].emCartaz = true
            //}
        //}
    //}
//}

//function alterarStatusEmCartaz2(codigo){
  //  for(let i = 0; i < catalogo.length; i++){
    //    if(catalogo[i].codigo === codigo) {
      //      catalogo[i].emCartaz = !catalogo[i].emCartaz
        //}
    //}
//}

//alterarStatusEmCartaz2(2)

//const retornoStringfy = JSON.stringify(filme1)
//console.log(retornoStringfy)

//const retornoParse = JSON.parse(retornoStringfy)
//console.log(retornoParse)
// console.log(catalogo)

// const minhaString = "Aula Node Full Stack"

// console.log(minhaString.indexOf("A"))
// console.log(minhaString.slice(0,minhaString.length))
// console.log(minhaString.trim())
// console.log(minhaString.split(" "))

// const arrowFunction = () =>{

// }

// const teste = true
// const ternario = teste ? "resposta 1" : "resposta2"

// function alterarStatusEmCartaz1(codigo){
//     for(let i = 0; i < catalogo.length; i++){
//         if(catalogo[i].codigo === codigo) {
//             if(catalogo[i].emCartaz === true){
//                 catalogo[i].emCartaz = false
//             }
//             else {
//                 catalogo[i].emCartaz = true
//             }
//         }
//     }
// }

// function alterarStatusEmCartaz3(codigo){
//     for(let i = 0; i < catalogo.length; i++){
//         if(catalogo[i].codigo === codigo) {
//             catalogo[i].emCartaz === true ? 
//                 catalogo[i].emCartaz = false : 
//                 catalogo[i].emCartaz = true   
//         }
//     }
// }

// function alterarStatusEmCartaz2(codigo){
//     for(let i = 0; i < catalogo.length; i++){
//         if(catalogo[i].codigo === codigo) {
//             catalogo[i].emCartaz = !catalogo[i].emCartaz
//         }
//     }
// }



// function alterarStatusEmCartaz2(codigo,funcaoDeEncontrarFilme){
//   const filmeEncontrado = funcaoDeEncontrarFilme(codigo)
//   filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
// }
// function buscarFilme(codigo){
//   for(let i = 0; i < catalogo.length; i++){
//       if(catalogo[i].codigo === codigo) {
//           return catalogo[i]
//       }
//    }
// }

// alterarStatusEmCartaz2(2,buscarFilme)
  // console.log(catalogo)
// 

// const listarFilmesDeLongaDuracao = () => {
//   const filmesLongos = catalogo.filter((filme) => {
//       return filme.duracao > 150
//   })

//   return filmesLongos
// }

// let total =[0,1,2,3].reduce(function(acumulador,valoratual) {
//   return acumulador + valoratual;},0)

//   console.log(total)

// let total =[0,2,2,3].reduce(function(acumulador,valoratual,index,array) {
//   console.log("Interacao",index,acumulador,valoratual)
//   acumulador.push(valoratual)
//     return acumulador;
//   },[])
  
//   console.log(total)


// catalogo.forEach(verFilme)

// // // function buscarFilme2(codigo){
// // //   for (let i = 0;i< catalogo.length;i++){
// // //     if(catalogo[i]=== codigo){
// // //       return catalogo[i]
// // //     }
// // //   }
// // // }

// // // console.log(buscarFilme2(1))





const catalogo = require("./database/catalogo.json")

const adicionarFilme = (filme) => {
  catalogo.push(filme)
}

function alterarStatusEmCartaz(codigo,funcaoDeEncontrarFilme){
  const filmeEncontrado =filmeEncontrado(codigo)
  filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
}

function verFilme(filme){
 console.log(filme.titulo+" - "+filme.anoLancamento)
}

// let verfilme2 = catalogo
// catalogo.forEach(verFilme)

function buscarFilme(codigo)
   catalogo.forEach((filme) =>{
     if(filme.codigo === codigo){
       return filme
     }
   })

buscarFilme(3)
