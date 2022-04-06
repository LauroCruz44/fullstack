const http = require ('http');
const { emitWarning } = require('process');

http.createServer((req,res)=>{
    //console.log("Servidor esta rodando....")
    res.writeHead(200,{"Content-Type":"text/plain"});
        switch(req.url){
            case "/":
                res.end("voce esta na pagina home!")
                break;
            case "/contato":
                res.end("voce esta na pagina contato");
                break
            default:
                res.end(" Voce esta no nosso servidor");
            break
        }
    res.end("Meu Primeiro Servidor")

    
}).listen(3000);