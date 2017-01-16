var http=require('http');
// var server=http.createServer(function (request,response){})
var server=http.createServer();
server.on('request',function (request,response){
	console.log(request.url);
	response.writeHead(200,'success statusCode',{
		'content-type':'text/plain',
		// 'location':'www.studypay.com',
		'content-disposition':__filename,
		'content-length':8,
		'set-cookie':'cookie=cookies',
		'content-encoding':'utf8',
		'Cache-Control':true,
		'Expires':60*3600,
		'Etag':true
	});
	response.write('response');
	response.end();
});
server.listen(80);
server.on('listening',function (){
	console.log('server listen start')
});
server.on('error',function (err){
	console.error(err)
});

