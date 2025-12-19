var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

console.log('Serveur démarré sur http://127.0.0.1:3000/');
