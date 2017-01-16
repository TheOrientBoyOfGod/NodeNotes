var http=require('http');
var options = {
	'hostname': 'localhost',
	'port': 80,
	'path': '/',
	'method': 'GET'
};
var request = http.request(options, function(res) {
	console.log("status:" + res.statusCode, '\nheaders:' + JSON.stringify(res.headers))
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log(chunk)
	})
})
request.end();