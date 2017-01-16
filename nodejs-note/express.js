var express = require('express');
var url = require('url');
var app = express();
app.get('/*', function(req, res) {
	console.log(req.headers);
	var pathname = url.parse(req.url).pathname;
	// console.log(req.url)
	
	if (pathname == '/' || '') {
		res.sendfile(__dirname + '/serverHTTP/templets/default/index_gongcheng_yijixiaofang2017.html');
	} else {
		res.sendfile(__dirname + '/serverHTTP' + pathname)
	}
}).listen(80);

