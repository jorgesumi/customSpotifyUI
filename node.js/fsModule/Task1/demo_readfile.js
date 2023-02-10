var http = require('http'); // Hyper Text Transfer Protocol
var fs = require('fs'); // File System

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) { // requests html file, if unsuccesful displays error msg
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); // writes content from the html file
    return res.end();
  });

  // *** For the next portion of methods ***
  // *** file is created if it does not exist ***


  // adds content to file file using appendFile
  fs.appendFile('newfile1.txt', 'Hello content!', function (err) { 
    if (err) throw err;
    console.log('Saved');
  });

  // opens file based off the second argument/flag
  fs.open('mynewfile2.txt', 'w', function (err, file) { 
    if (err) throw err;
    console.log('Saved!')
  });

  // writes over existing content in file
  fs.writeFile('newfile3', 'Hello content!', function (err) { 
    if (err) throw err;
    console.log('Saved!');
  });

  // deletes file
  fs.unlink('newfile1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  // renames file
  fs.rename('newfile03.txt', 'myrenamedfile.txt', function (err) {
    console.log('File Renamed!');
  });
}).listen(8080);