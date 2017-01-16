// var http=require('http');
// var server=http.createServer(function(req,res){
// 	console.log(req.headers)
// 	// req.on('response',function(reqdata){
// 	// 	console.log(reqdata);
// 	// })
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('response message from server');
// }).listen(80,'localhost',function(){
// 	console.log('success listen');
// })



var http=require('http');
var fs=require('fs');
var buffer;
var server=http.createServer(function(req,res){
	console.log(req.headers);
	res.writeHead(501,{'Location':'http://www.studypay.com'})
	req.on('response',function(reqdata){
		console.log(reqdata);
	})
	// fs.readFile('templets/default/index_gongcheng_yijixiaofangf2017.htm','utf8',function (err,datahtml){
	// 	buffer=datahtml.toString('utf8');
	// 	res.writeHead(200,{'Content-Type':'text/plain'});
		res.write("yankui");
		res.end('response message from server\n'+req.headers["accept"]);
	// })
}).listen(80,'localhost',function(){
	console.log('success listen');
})



// <span style="white-space:pre">  </span>
// var http = require('http');  
//     http.createServer(function(req, res){  
//         var html = '<html>'  
//         +'<head>'  
//         +'<title>nodejs</title>'  
//         +'</head>'  
//         +'<body>'  
//         +   'hello world! 1234'  
//         +'</body>'  
//         +'</html>';  
//         res.writeHead(200,{'Content-Type' : 'text/html'});  
//         res.write(html);  
//         res.end();  
//     }).listen(8888);  
