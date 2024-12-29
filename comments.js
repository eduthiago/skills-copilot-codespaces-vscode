//create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.json');
var port = process.env.PORT || 3000;
var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  if (uri === '/comments' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  } else if (uri === '/comments' && req.method === 'POST') {
    var data = '';
    req.on('data', function(chunk) {
      data += chunk.toString();
    });
    req.on('end', function() {
      var comment = JSON.parse(data);
      comments.push(comment);
      fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), function(err) {
        if (err) {
          throw err;
        }
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(comments));
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
});
server.listen(port);
console.log('Listening on port ' + port);



