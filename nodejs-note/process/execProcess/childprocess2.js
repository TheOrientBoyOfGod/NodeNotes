var fs=require('fs');
var out=fs.createWriteStream(__dirname+'/messaage.txt');
process.stdin.on('data',function (data){
	out.write(data);
	process.exit();
})