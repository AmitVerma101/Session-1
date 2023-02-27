const http=require('http');
const port=3000;

const server=http.createServer((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(url==='/1'&&method==='GET'){
        res.end('This is the page 1');
    }
   else if(url==='/2'&&method==='GET'){
        res.end('This is the page 2');
    }
    else if(url==='/3'&&method==='GET'){
        res.end('This is the page 3');
    }
    
    else {
        res.end("This is the Default page");  
    }
   
});


server.listen(port,()=> {
    console.log(`server running at http://localhost:${port}`);
})