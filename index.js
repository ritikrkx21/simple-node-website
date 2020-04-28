var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename;
  if (q.pathname == "/about.html"){
    filename = "." + q.pathname;
  } else if (q.pathname == "/"){
    filename = "./index.html"
  } else if (q.pathname == "/contact-me.html"){
    filename = "./contact-me.html"
  } else {
    filename = "./404.html"
  }
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);