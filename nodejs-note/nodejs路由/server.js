var http = require('http');
var url = require('url');

// function start(rotute) {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log('Request for' + pathname + 'received');
// 		rotute(pathname);
// 		response.writeHead(200, {
// 			'Content-type': 'text/plain'
// 		});
// 		response.write('成功pathname');
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8888,127.1.1.01);
// 	console.log("Server has started.");
// }

// exports.start = start;

// console.warn(proscess.version);

var urlss='http://www.imooc.com/';
http.get(urlss,function(res){
	var html='';
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		console.log(html)
	})
}).on('error',function(err){
	console.log(err.stack)
})