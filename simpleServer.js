 var http = require('http');
var port = 8080; 

var requestHandler = function(request, response) {
  response.end('Request received! I am the coolest.');
};

// a server is created, but not started
var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080 - go to your browerd and paste in http://127.0.0.1:8080
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});

console.log('Is the server started?');