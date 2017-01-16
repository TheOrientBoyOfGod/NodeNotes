var http=require('http');
var fs=require('fs');
var buffer;
var server=http.createServer(function(req,res){
	console.log(req.headers)
	req.on('response',function(reqdata){
		console.log(reqdata);
	})
	fs.readFile(__dirname+'/templets/default/media/css/yijixiaofang2017.css','utf8',function (err,datacss){
		var datacss1=datacss.toString('utf8');
		res.setHeader("Content-Type","text/css");
		res.write(datacss1)
		res.end('response message from server');
	})
}).listen(81,'localhost',function(){
	console.log('success listen');
})