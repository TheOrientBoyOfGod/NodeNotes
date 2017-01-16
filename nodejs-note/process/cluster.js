var cluster=require('cluster');
var http=require('http');
if (cluster.isMaster) {
	cluster.fork();
	console.log('该程序运行在主进程中')
}else if(cluster.isWorker){
	console.log('this code runing in childprocess prvious')
	var server=http.createServer();
	server.on('request',function (req,res){
		if (req.url!=='/favicon.ico') {
			console.log(req.url)
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.write('hello\n');
			res.end();
			console.log('this code runing in childprocess')
		};
	}).listen(80)
}
cluster.on('fork',function (worker){
	console.log('worker.id:'+worker.id)
})
cluster.on('online',function (worker){
	console.log('worker.id:'+worker.id)
})