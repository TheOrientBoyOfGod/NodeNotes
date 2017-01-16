var urls = 'http://localhost:8888/start?foo=bar&hello=world';
var urls2 = '//localhost:8888/start?foo=bar&hello=world';
var url = require("url");
var url1 = url.parse(urls, false, false);
var url2 = url.parse(urls2, true, true);
console.log(url1)
console.log(url2)

var urlstring = url.format({
	protocol: null,
	slashes: true,
	auth: null,
	host: 'localhost:8888',
	port: '8888',
	hostname: 'localhost',
	hash: null,
	search: '?foo=bar&hello=world',
});
console.log(urlstring);

var resolveurl = url.resolve('localhost:8888', '?foo=bar&hello=world')
console.log(resolveurl)


// var http = require("http");
// var url = require("url");

// function start() {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("Request for " + pathname + " received.");
// 		response.writeHead(200, {
// 			"Content-Type": "text/plain"
// 		});
// 		response.write("Hello World");
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("Server has started.");
// }

//  start();