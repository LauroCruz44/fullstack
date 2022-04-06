const express = require('express')

const app = express()

app.get ("/",(req,res)=>{
    res.status(400).send("retornando tela principal")
})

app.get ("/contato",(req,res)=>{
    res.status(400).send("retornando tela contato")
})

app.listen(3030,()=>{
    console.log("iniciando o servirdor")
})