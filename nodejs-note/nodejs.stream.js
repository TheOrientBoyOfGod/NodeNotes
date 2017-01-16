// 从流中读取数据
var fs = require('fs');
var data = '';
// fs.createReadStream(file,[opts]);opts即使返回对象的属性
// fs.createReadStream(file,{highWaterMark:num});
//读取文件流，返回对象;hightWaterMark:num设定每次读取的字节的长度
var readerStream = fs.createReadStream('input.txt', {
	highWaterMark: 10 //限制了了每次读取长度
}); //读取文件流，返回对象
readerStream.setEncoding('utf8'); //设置读取编码，防止出现乱码；这里可以让data是以字符串的形式而非对象形式；
var chunks = [];
readerStream.on('data', function(chunk) {
	chunks.push(chunk)
	console.log(chunks); //[ <Buffer e9 80 9a e8 bf 87 6e 6f 64 65>,<Buffer 6a 73 e5 8f af e4 bb a5 e5 88> ]
	data += chunk; //这里不是简单的对象相加，而是data=data.toString()+chunk.toString();
	console.log(data);
});

readerStream.on('end', function() {
	console.log();
	console.log(data);
	console.log('读取成功');
});

readerStream.on('error', function() {
	console.log(error.stack);
});
console.log("程序执行完毕");
// 写入流
var fss = require('fs');
var writeStream = fss.createWriteStream('output.txt'); //写入文件流，返回对象；用于创建文件；
writeStream.write("通过nodejs可以创建文件也能从写文件内容", 'utf8'); //写入文件流内容
writeStream.end();
writeStream.on('finish', function() {
	console.log('写入成功')
});
writeStream.on('error', function(err) {
	console.log(err.stack);
})
