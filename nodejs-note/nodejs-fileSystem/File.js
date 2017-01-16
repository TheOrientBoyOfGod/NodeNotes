var fs = require('fs'),
	path = require('path'),
	readData;
// 读取文件readFile函数
// fs.readFile(path, [flags:;,encoding:;], callback(err,data)); 
fs.readFile(__filename, {
		flag: 'r+',
		encoding: 'utf8'
	}, function(err, data) {
		if (err) {
			console.log('readFile   ' + err.stack)
		} else {
			readData = data;
			writeFile();
		}
	}) //flag:'r+',或r，改为w的会出现删除所写的代码

// 写文件
// fs.writeFile(path, data, [flags:;,mode:;,encoding:;], callback(err,data)); //也能创建文件

// fs.createWriteStream('writeFile.txt');创建文件流
function writeFile() {
	fs.writeFile(__dirname + "/writeFile.txt", readData, {
		flag: 'a',
		mode: '1',
		encoding: 'utf8'
	}, function(err, ) {
		appendFile(readData);
	});
};
// 以追加方式写文件
// fs.appendFile(filename,data,[flag:;,mode:;,encoding:;],callback(err,data));
function appendFile(readData) {
	fs.appendFile(__dirname + "/writeFile.txt", '\n追加的内容:  ' + readData, {
		flag: 'a',
		mode: '1',
		encoding: 'utf8'
	}, function(err, data) {
		console.log('appendFile   ' + data);
		openFile_read();
	})
}
var buffer = new Buffer(100000);
// 打开文件
// fs.open(filename, flags, [mode], callback(err,fd));
// 读文件，读取打开的文件内容到缓冲区中；
// fs.read(fd, buffer, offset, length, position, callback(err,bytesRead,buffer));
function openFile_read() {
	fs.open(__dirname + "/writeFile.txt", 'r', '777', function(err, fd) {
		if (err) {
			console.log('openFile_read   ' + err)
		} else {
			console.log('open: ' + buffer.length);
			console.log('fd: ' + fd);
			fs.read(fd, buffer, 0, 5000, 0, function(err, bytesRead, buffer) {
				if (err) {
					console.log('read: ' + err)
				} else {
					// console.log(bytesRead + "\n", buffer.slice(0, bytesRead).toString());
					console.log('read:bytesRead ' + bytesRead + "\n");
					openFile_write();
				}
			})
		}
	})
}
// 写文件，将缓冲区内数据写入使用fs.open打开的文件
// fs.write(fd, buffer, offset, length, position, callback(err,bytesWrite,buffer));//也可以创建文件
// 刷新缓存区;
// fs.fsync(fd, [callback(err,bytesWrite,buffer)])
// fs.close(fd)
function openFile_write() {
	fs.open('./openfile-write.js', 'a', '777', function(err, fd) {
		if (err) {
			console.log('openFile_write ' + err)
		} else {
			fs.write(fd, buffer, 0, 4000, 0, function(err, bytesWrite, buffer) {
				if (err) {
					console.log('write ' + err)
				} else {
					// console.log(bytesWrite + "\n", buffer.slice(0, bytesWrite).toString());
					console.log('write:bytesWrite ' + bytesWrite + "\n");
					fs.fsync(fd, function(err, writeBytes, buffer) {

					});
					fs.close(fd);
				}
			})
		}
	})
}
// 创建目录;
// fs.mkdir(path, [mode], function(args))
fs.mkdir(__dirname + '/mkdir', '0777', function(err) {
	if (err) {
		console.warn('mkdir ' + err)
	}
})

// 读取目录;
// fs.readdir(path,callback(err,files))
// 查看文件与目录的信息;
// fs.stat(filePath, function(err, stat))
fs.readdir(__dirname, function(err, files) {
	if (err) {
		console.log('readdir ' + err)
	} else {
		files.forEach(function(item) {
			var filePath = path.normalize(__dirname + '/' + item);
			fs.stat(filePath, function(err, stat) {
				if (err) {
					console.log('readdir ' + err)
				} else {
					if (stat.isFile()) {
						console.log(filePath + ' is: file')
					};
					if (stat.isDirectory()) {
						console.log(filePath + ' is: dir')
					};
					if (stat.isBlockDevice()) {
						console.log(filePath + ' is: BlockDevice')
					};
					// stat fs.Stat一个对象实例，提供如:isFile, isDirectory,isBlockDevice等方法及size,ctime,mtime等属性
				}
			})
		})
	}
})

// 查看文件与目录的是否存在
// fs.exists(path, callback(boole));
fs.exists(__dirname, function(boole) {
	var retTxt = boole ? retTxt = '文件存在' : '文件不存在';
	console.log(retTxt);
});

// 修改文件访问时间与修改时间
// fs.utimes(path, atime, mtime, callback(err));//atime新的访问时间, mtime新的修改时间,
fs.utimes(__dirname, new Date(), new Date(), function(err) {
	if (err) {};
	fs.stat(__dirname + '/test.txt', function(err, stat) {

		// console.log('访问时间: ' + stat.atime.toString() + '; \n修改时间：' + stat.mtime);

		// console.log(stat.mode);
	});
});