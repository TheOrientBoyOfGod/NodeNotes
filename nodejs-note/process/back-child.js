var child_process=require('child_process');
var fs=require('fs');
var message=fs.openSync('message.txt','w+');
var childprocess=child_process.spawn('node',['writes.js'],{
	detached:true,
	stdio:['ignore',message,'ignore'],
	cwd:'./execProcess'
});
childprocess.on('error',function (code,signal){
	console.log(code,signal)
})
childprocess.unref();
// process.exit();