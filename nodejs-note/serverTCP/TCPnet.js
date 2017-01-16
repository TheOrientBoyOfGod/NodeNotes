var net = require('net');
var fs = require('fs');
var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		fs.readFile('../serverHTTP/templets/default/index.htm', 'utf8', function(err, datahtml) {
			socket.write(datahtml);
		});
		console.log(data)
		var address = server.address();
		var sockets = socket.address();
		console.log('serverport:' + address.port, 'serveraddress:' + address.address, 'serverfamily:' + address.family)
		console.log('socketport:' + sockets.port, 'socketaddress:' + sockets.address, 'socketfamily:' + sockets.family)
		console.log('链接已建立');
		console.log(socket.remoteAddress);
		console.log(socket.remotePort);
		console.log(socket.localAddress);
		console.log(socket.localPort);
		// socket.end();
	});
	socket.on('end', function() {
		console.log('链接已经断开');
		// server.unref();
		// socket.end(); //断开的socket即是嵌套字或是链接，并未关闭服务器；
		// server.close() //并未关闭服务器;阻止新的client连入
		// server.on('close', function() {
		// 		console.log('first reject new client connect,then old client all disconnected trigger this closeEvent');
		// 		console.log('server haved closed');
		// 		socket.write('server haved closed');
		// 	}) //关闭服务器时，触发；
	});
	socket.write('server welcome nodejs world transfer client');
	socket.on('error', function() {
		console.log('close client>error of socket trigger');
	})
});
server.listen(80, function() {
	console.log('server bound');
});