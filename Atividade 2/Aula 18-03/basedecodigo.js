var minhabiblioteca = require("./exemplobiblio");
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(minhabiblioteca.primeironome);
    res.write(minhabiblioteca.ultimonome);
    res.write(minhabiblioteca.RGM);
  }).listen(8080);
