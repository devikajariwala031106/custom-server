const fs = require("fs");
const { error } = require("console");
const http = require("http"); 

const port = 8000;

const path = require("path");


const requesthandler = (req, res) => {
    
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = './pages/index.html';
            break;
        case '/about':
            fileName = './pages/about.html';
            break;
        case '/contact':
            fileName = './pages/contact.html';
            break;
        case '/services':
            fileName = './pages/services.html';
            break;
    
        default:
            fileName = './pages/404.html';
            break;
    }

    fs.readFile(path.join (__dirname, fileName), (err, data) => {
        
        if(err){
            res.writeHead(500, {
                'content-type' : 'text/plain'});
            res.end ("Internal server error");
        }
        else{
            res.writeHead(200, {
                'content-type' : 'text/html'
            });
            res.end(data);
        }
    })
} 

const server = http.createServer(requesthandler);

server.listen(port, (err) => {
    if(err){
        console.log(err);
        return false;
    }
    else {
        console.log(`server running on ${port}`);
        
    }
}); 





