var net = require('net');
var client = net.connect({
	port: 80
}, function() {
	console.log('client connected');
	console.log(client.remoteAddress);
	console.log(client.remotePort);
	console.log(client.localAddress);
	console.log(client.localPort);
	client.write('client hello transfer server data');
});
client.on('data', function(data) {
	console.log(data.toString());
	// client.on('drain',function(){
	// 	client.write('client hello transfer server data');
	// })
	client.end();
	
});
client.on('error', function() {
	console.log('close server>error of client trigger');
});
client.on('end', function() {
	console.log('client disconnected');
});