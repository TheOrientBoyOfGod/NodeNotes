var fs = require('fs'),
	datavar = '';
var readerStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output-node.js');
var writeStreamtxt = fs.createWriteStream('output-node.txt');

console.log(readerStream)
console.log(writeStreamtxt)
	// 方法一
readerStream.setEncoding('utf8');
readerStream.on('data', function(data) {
	datavar = data + 'copydata';
	console.log(datavar)
})
readerStream.on('end', function() {
	console.log(datavar);
	console.log('读取成功');
	writeStream.write(datavar, 'utf8');
	writeStream.end();
	writeStream.on('finish', function() {
		console.log('写入成功')
	});
	writeStream.on('error', function(err) {
		console.log(err.stack);
	})
})
readerStream.on('error', function(error) {
	console.log(error.stack)
})

// 方法二
readerStream.pipe(writeStreamtxt);//将读取的文件copy给写入文件
console.warn('success copy');
// 解压
var zlib = require('zlib');
fs.createReadStream('read-write-stream.js').pipe(zlib.createGzip()).pipe(fs.createWriteStream('read-write-stream.js.zip'));
console.log("文件压缩成功");
setTimeout(function(){
	fs.createReadStream('read-write-stream.js.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('read-write-stream.js.txt'));
	console.log("文件解压成功");	
},2000)
