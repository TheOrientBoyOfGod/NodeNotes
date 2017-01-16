var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var types = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "htm": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
var server = http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	if (pathname=='/'||'') {
		pathname='/templets/default/index.htm';
	}
	var realPath=__dirname+pathname;
	fs.exists(realPath, function (exists){
		if (!exists) {
			response.writeHead(404, {
				'Content-Type': 'text/plain'
			});

			response.write("This request URL " + pathname + " was not found on this server.");
			response.end();
		} else {
			fs.readFile(realPath, "binary", function (err, file) {
				if (err) {
					response.writeHead(500, {
						'Content-Type': 'text/plain'
					});
					response.end(err);
				} else {
					// var extname=path.extname(realPath).substring(1);
					// var contentType = types[extname] || "text/plain"
					response.writeHead(200, {
						'Content-Type': ''//可以不写，浏览器自动解析;当指定错误类型是会出现一下载的方式出现
						// 'connection':'keep-alive'
					});
					// console.log(file);
					response.write(file, "binary");
					response.end();
				}
			});
		}
	});
}).listen(80,function(){
	console.log('success listen');
});
