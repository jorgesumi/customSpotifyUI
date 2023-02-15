const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();
const port = 8080

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
http.createServer(function (req, res) {
    fs.readFile('app.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);