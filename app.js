'use strict';

var http = require('http');
var fs = require('fs');


var server  = http.createServer(function(connection){
  console.log('someone connected to your server');
});


server.listen(8080, function(){
  console.log('Server is created and listening to port no: 8080');
});
