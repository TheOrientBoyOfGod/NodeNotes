// child=require('child_process').exec(command,[options],[callback]);
var cp=require('child_process');
var sp1=cp.exec('node childprocess1.js one two three four',{cwd:__dirname},function (err,stdout,stderr){
	if (err) {
		console.log('子进程启动失败：'+err);
		process.exit();
	}else{
		console.log('子进程标准输出：'+stdout.toString());
		sp2.stdin.write(stdout.toString());
	};
});
var sp2=cp.exec('node childprocess2.js',{cwd:__dirname},function (err,stdout,stderr){
	process.exit();
});




