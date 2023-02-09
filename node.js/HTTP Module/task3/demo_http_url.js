var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200 means that everything is good, the second part is an object containing response headers

    // response to the client
    res.write(req.url); // in this case the response is requesting the url requested by the client so it can write it down
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

