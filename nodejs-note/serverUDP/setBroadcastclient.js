var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'192.168.1.109');
client.on('listening', function() {
	var address = client.address();
	console.log(address.port, address.address, address.family)
});
var buffer=new Buffer('message from client send server');
client.send(buffer, 80, '192.168.1.109', function (err, sendbyte) {
	if (err) {
		console.error("err.code:%s", err.code)
	} else {
		console.log("已发送的字节：%d", sendbyte);
	};
});
client.on('message',function (msg,rinfo){
	var buffer = new Buffer("已接受server发来的数据：" + msg);
	client.send(buffer, 80, '192.168.1.109', function (err, sendbyte) {
	if (err) {
		console.error("err.code:%s", err.code)
	} else {
		console.log("已发送的字节：%d", sendbyte);
	};
});
})