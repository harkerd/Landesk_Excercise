const http = require('http');
var fs = require('fs');

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, result) => {
    console.log('URL requested: "' + request.url + '"');

    //if(request.url == "/data") { //requesting database json


        //result.writeHead(200, {'Content-Type': 'text/json'});
        //result.write(data);
        //result.end();

    //} else { //requesting a file
        
        var path = '../client';
        var type = '';

        if(request.url == '/') {
            path += '/index.html';
            type = 'html';
        } else if (request.url == "/data") {
            path = 'data.json';
            type = 'json';
        } else if(request.url.endsWith('.html')){
            path += request.url;
            type = 'html';
        } else if(request.url.endsWith('.js')){
            path += request.url;
            type = 'javascript';
        } else if(request.url.endsWith('.css')){
            path += request.url;
            type = 'css';
        } else {
            path += request.url;
            type = 'text';
        }

        fs.readFile(path, function (error, data) {
            if (error) {
                console.log('\n' + error + '\n');
                data = '';
            }
            result.writeHead(200, {'Content-Type': 'text/' + type});
            result.write(data);
            result.end();
        });

    //}
});

server.listen(port, host, () => {
    console.log('Server running at http:' + host + ':' + port);
});