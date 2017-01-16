var dgram = require('dgram');
var server = dgram.createSocket('udp4',function(data){
	console.log('from clientSend message:'+data.toString('utf-8'))
});
server.on('message', function(msg, clientAdd) {
	console.log('msg:'+msg)
	console.log('server get msg from clinet:clientAdd.address:' + clientAdd.address + ' clientAdd.port:' + clientAdd.port);
});
server.on('listening', function() {
	var address = server.address();
	console.log(address);
	console.log('server listening:' + address.address + ':' + address.port);
});
server.bind();