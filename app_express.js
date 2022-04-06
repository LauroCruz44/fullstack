const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('Ola Mundo!');
});

app.get('/contatos',(req,res)=>res.send({nome:"Lauro",idade:32}))
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})