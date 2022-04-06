const http = require('http')

http.createServer((req,res)=>{
    console.log(req.url)


    //Utilizando if
    // if(req.url === "alguma coisa" ){

    // }

    switch(req.url){
        case "/":
            res.end("retornando tela Home")
            break;

        case "/Contato":
            res.end(" Retornando tela Contato")
            break;
        default:
            res.end("Not found ")

    }
    res.writeHead(200,{"Content-Type":"text/plain","charset=utf-8"})
    // res.end("Get Funcionando ok")
}).listen(3030)
