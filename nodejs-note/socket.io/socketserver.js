var http=require('http');
var express=require('express');
var cp = require('child_process');
var io=require('socket.io');
var app=express(),names=[];
var server=http.createServer(app)
server.listen(80);
app.get('/',function(req,res){
	res.sendfile(__dirname+'/socketClient.html')
})
var socketserver=io.listen(server);
socketserver.sockets.on('connection',function (socket){
	socket.emit('login',names);
	socket.on('login',function (name){
		names.push(name);
		socketserver.sockets.emit('login',names);

		// socket.emit('login',names);
		// socketserver.broadcast.emit('login',names)
	})
});
// server.on('close',function(){
	
// 	var sp1 = cp.exec('node socketserver.js', {
// 		cwd: __dirname
// 	}, function(error, stdout, stderr) {
// 		if (error) {
// 			console.log(error.message)
// 		};
// 	});
// })