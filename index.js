const http = require('http');

const fs = require('fs');

const port = 3000

const requestHandler = (req, res) => {

    let fileName = "";

    switch(req.url){
        case "/":
            fileName="./index.html";
            break;
        case "/about":
            fileName="./about.html";
            break;
        case "/blog":
            fileName="./blog.html";
            break;
        case "/services":
            fileName="./services.html";
            break;
        case "/contact":
            fileName="./contact.html";
            break;
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.end("File not found");
            return;
        }
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if(err){
        console.log("Port for server not found");
        return false;
    }
    console.log("Server is running on :- "+port);
})  