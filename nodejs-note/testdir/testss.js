// var buffer = new Buffer('string','utf8');
// console.log(buffer,buffer[0],buffer.toString('binary'));
// var buffer = new Buffer('string','base64');
// console.log(buffer,buffer[0],buffer.toString('binary'));
// var buffer = new Buffer('string','binary');
// console.log(buffer,buffer[0],buffer.toString('base64'));
// console.log(buffer.toJSON(buffer))
// console.log(buffer.toJSON());
// var fs=require('fs');
// // var buffer=new Buffer('string','utf8');
// // var dd=fs.read(fd,buffer,0,1000,0,function (err,typesRead,buffer){
// // 	console.error(err)
// // });
// // console.log(dd);
// var ss=fs.readFile(__filename, 'utf8',function(err,data){
// 	console.log(data)
// });
// console.log(ss)
// console.log(process.pid);
// process.stdin.resume();
// process.on('SIGINT',function(){
// 	console.log('got a sigint exiting');
// 	process.exit(0);
// });


// #!/usr/bin/env node
// console.log('run')
// var spawn=require('child_process').spawn;
// var ping=spawn('node',['bbc.co.uk']);
// ping.stdout.setEncoding('utf8');
// ping.stdout.on('data',function (data){
// 	console.log(data)
// })
// fs.writeFile(__filename, "data", {encoding:'base64',flag:'a+'}, function (err){
// 	var ss=fs.readFile(__filename, 'binary',function(err,data){
// 	console.log(data)
// });
// });
// fs.readdir(__dirname,function (err,files){
// 	if (err) return console.log(err)
// 		console.log('success:'+files);
// })//
// var zlib = require('zlib');
var fs = require('fs');
var path = require('path');
console.log(path)
// 	fs.createReadStream('lunt.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('lunt.js'));	

// fs.stat(__dirname,function (err,stats){
// 	console.log(stats)
// })

  



