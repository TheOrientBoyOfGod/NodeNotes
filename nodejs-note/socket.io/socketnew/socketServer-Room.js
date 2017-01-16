var http=require('http');
var express=require('express');
var io=require('socket.io');
var app=express(),names=[],socketID=[];
var server=http.createServer(app);
app.get('/',function (req,res){
	res.sendFile(__dirname+'/sockethtml.html');
});
server.listen(80);
socketIo=io.listen(server);
socketIo.sockets.on('connection',function (socket){
	socket.on('login',function (name){
		for (var i =0; i< names.length; i++) {
			if (names[i]==name) {
				socket.emit('duplicate');
				return;
			};
		};
		names.push(name);
		console.log(socket.id)
		// var socket.id=name;
		// socketID.push(socket);
		socketIo.sockets.emit('login',name);
		socketIo.sockets.emit('sendclients',names);
	});
	socket.on('chat',function (data){
		socket.broadcast.emit('chat',data);
		socket.emit('mychat',data);
	})
	socket.on('logout',function (name){

		for (var i = 0; i < names.length; i++) {
			if (names[i]==name) {
				names.splice(i,1);
				break;
			};
		};	
		// console.warn('2')
		socket.broadcast.emit('logout',name);
		socketIo.sockets.emit('sendclients',names);
	})
})