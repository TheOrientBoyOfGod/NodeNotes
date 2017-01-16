var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message', function (msg, rinfo) {
	var buffer = new Buffer("已接受客户端发来的数据：" + msg);
	console.log("remoteinfomation:", rinfo+"\nmsg:", msg.toString());
	server.setBroadcast(true);
	server.setMulticastTTL(128);
	server.setMulticastLoopback(false);
	
	server.send(buffer, 41235, '192.168.1.109', function (err, sendbyte) {
		if (err) {
			console.error("err.code:%s", err.code)
		} else {
			console.log("已发送的字节：%d", sendbyte);
		};
	})


})
server.bind(80, '192.168.1.109');
server.on('listening', function() {
	// var address = server.address();
	// console.log(address.port, address.address, address.family)
});
