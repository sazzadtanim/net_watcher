'use strict';

var http = require('http');
var fs = require('fs');
var filename = process.argv[2];

var server  = http.createServer(function(connection){
  // ekhane amar ekta question ache?
  //  function er vitore connection er kaj ki?
  // eita janar jonno
  // console.log(connection);

  console.log('Someone is connected to your server.\n'+'He is watching filename: '+ filename+' for changes..\n');
  // main kajta korte hobe , file take watch korte hobe
  var watcher = fs.watch(filename, function(){
    console.log('file has been changed.');
  });
  // connection close hole janabe
  connection.on('close', function(){
    console.log('user has left.');
  });

});


server.listen(8080, function(){
  console.log('Server is created and listening to port no: 8080');
});
