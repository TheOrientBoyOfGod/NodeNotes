var dgram = require('dgram');
var message = new Buffer('UDPclient:message transfer server by UDP', 'utf-8');
var client = dgram.createSocket('udp4');
// client.send(buf,offset,lenth,port,adresss,[callback])
client.send(message, 0, message.length, 80, 'localhost', function(err, bytes) {
	console.log(bytes)
	client.close();
})