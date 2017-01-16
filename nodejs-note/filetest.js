var fs = require('fs');
var path = require('path');
fs.readFile(__dirname + '/nodejs-all-grammar.js', {
	flag: 'r+',
	encoding: 'utf8'
}, function(err, Data) {
	fs.unlink(__dirname + "/testdir/links", function(err) {})
	readData = new Buffer(Data, 'utf-8');
	writeFile(readData);
})

function writeFile(readData) {
	fs.writeFile(__dirname + "/testdir/links", readData, {
		flag: 'a+',
		mode: '0777',
		encoding: 'utf8'
	}, function(err) {});
}
fs.unlink(__dirname + '/testdir/link', function(err) {
	console.log('unlink:' + err);
});
fs.link(__dirname + '/nodejs-all-grammar.js', __dirname + '/testdir/link', function(err) {
		console.log('link:' + err)
	})
	// fs.access(__dirname+'/example.js', function(err) {
	//   console.log(err);
	// });

// fs.appendFile(__dirname+'/example.js', 'mycodefileappendFile',{flag:'a',mode:'0777',encoding:'utf8'}, function (err){
// 	console.log(err)
// })

// fs.chmod(__dirname, 777, function(err) {
// 	console.log(err)
// })

// fs.chown(__dirname, uid, gid, function(err) {
// 	console.log(err)
// })

// fs.createReadStream(__dirname + '/testdir/buffer.js', {
// 	flags: 'r',
// 	encoding: null,
// 	fd: null,
// 	mode: 0666,
// 	autoClose: true
// })

// fs.exists(__dirname + '/testdir', function (exists){
// 	console.log(exists)
// })

// fs.mkdir('onlydir','0777',function (err){
// 	console.log(err)
// })

// fs.mkdtemp('pefix', function (err,folder){
// 	console.log(folder)
// });//也是dir
//创建一个唯一的临时目录;生成要在所需的前缀后面添加的六个随机字符，以创建一个唯一的临时目录
//folder:他创建的文件夹路径作为一个字符串传递给回调的第二个参数

// fs.readdir(__filename,'Buffer', function (err, filesArray){
// 	console.log(filesArray)
// })//options:flag,encoding;

// var object=fs.readdirSync(__dirname,{encoding:'utf8'})
// console.warn(object)

// fs.readFile(__dirname+'/nodejs-all-grammar.js',function(err,data){
// 	console.log(data);
// });


// ????fs.readlink(__dirname+'/testdir/buffer.js','Buffer', function (err, linkString){
// 	console.log(linkString);
// });

// fs.realpath('','utf8', function (err,resolvePath){
// 	console.log(resolvePath);
// })

// fs.rename(__dirname+'/testdir/test12', __dirname+'/testdir/test11', function (err){
// 	console.log(err)
// })
// fs.rename(__dirname+'/testdir/test11', 'test12', function (err){
// 	console.log(err)
// })
// fs.rename('test12', __dirname+'/testdir/test12', function (err){
// 	console.log(err)
// });//可以证实是并发运行的，因为每次运行只有一个正确，2个同时报错;如果是'同步运行模式'会以次运行函数不会报错

// fs.rmdir(__dirname+'/testdir/testss', function (err){
// 	console.log(err)
// })

// fs.stat(__dirname+'/testdir/testss.js', function (err,stat){
// 	console.log(stat)
// 	console.log(err)
// })

// ???fs.symlink(__dirname, __dirname, 'file', function(err) {
// 	console.log(err)
// })
// fs.utimes(__dirname, new Date(), new Date(), function(err) {
// 	fs.stat(__dirname,function (err,stats){
// 		console.log(stats)
// 	})
// })

// fs.watch(__dirname, (event, filename) => {
// 	console.log(`event is: ${event}`);
// 	if (filename) {
// 		console.log(`filename provided: ${filename}`);
// 	} else {
// 		console.log('filename not provided');
// 	}
// });

// fs.watchFile(__filename,{persisit:true,interval:10000}, function (currTime, prevTime){
// 	console.log('the current mtime is:'+ currTime.mtime);
//   	console.log('the previous mtime was:'+ prevTime.mtime);
// })

// var fd = fs.openSync(__dirname+'/testdir/testss', 'w+');
// fs.write(fd, 'ssss', function(err, written, string) {
// 		console.log(err, written, string)
// 	}) //这种写法将数据data写入文件（根据文件描述符fd来查找文件）。如果数据不是一个缓冲区的实例值将被强制转换为一个字符串。

// fs.open(__dirname, 'r+', function (err,fd){
// 	console.log(`err:${err}`,fd)
// });

var filename=path.basename(__filename)
console.log(filename)
// path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// returns 'quux'
console.log(path.delimiter, path.sep)

