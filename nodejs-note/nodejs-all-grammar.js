// events是所有事件的根本集合对象
events.EventEmitter
var emitter = new events.EventEmitter //通过 require('events').EventEmitter 获取 EventEmitter 类。
	// 都是返回当前对象，可以链式操作
emitter.addListener(event, listener);
emitter.on(event, listener); //可以有多个事件
emitter.once(event, listener);
emitter.removeListener(event, listenerfn); //只能移除一个，listenerfn是外部定义的函数
emitter.removeAllListeners([event]);
emitter.setMaxListeners(n); //0代表无穷大；emitter.setMaxListeners(n) 的优先级高于 EventEmitter.defaultMaxListeners

EventEmitter.defaultMaxListeners

emitter.listeners(event) //返回事件的 listener 数组;
emitter.emit(event[, arg1][, arg2][, ...]) //可以触发多个事件；如果事件有 listener,返回 true， 否则 false


类方法: EventEmitter.listenerCount(emitter, event) //返回指定事件的 listener 数量。
事件： newListener //添加 listener 的时候会触发这个事件。当这个事件触发的时候，listener 可能还没添加到 listener 数组。
事件： removeListener //删除 listener 的时候会触发这个事件。当这个事件触发的时候，listener 可能还还没从 listener 数组移除;
example: emitter.on('newListener', callback)


Buffer 类是全局对象， 所以访问它不必使用 require('buffer');
var buffer = new Buffer(size);
var buffer = new Buffer(array);
var buffer = new Buffer(string, [encoding]);
// 类方法:
var boolean = Buffer.isEncoding(encoding) 类方法: //测试给定的编码字符串;返回 true，否则返回 false。
var boolean = Buffer.isBuffer(obj) 类方法: //obj 如果是 Buffer 返回 true, 否则返回 false
var numberTypes = Buffer.byteLength(string[, encoding]) 类方法: //将会返回这个字符串真实字节长度
var buffer = Buffer.concat(list, [totalTypeLength]); //list是[buffer1,buffer2...]isArray

var number = Buffer.compare(buf1, buf2);//buf1在前为 - 1， 等为0， 后为1;buf1.compare(buf2);和其一样
buffer实例
buf.length //buffer的字节大小一般为固定值

write
buf.write(string[, offset][, length][, encoding]) //offset是从buffer的哪个位置其写入string
buf.writeUIntLE(value, offset, byteLength[, noAssert]);//value是写入的int数据为number; //offset {Number 类型} 0 <= offset <= buf.length
buf.writeUIntBE(value, offset, byteLength[, noAssert]);//uint, int是无符号和有符号整型数据; //byteLength {Number 类型} 0 < byteLength <= 6
buf.writeIntLE(value, offset, byteLength[, noAssert]);//LE, BE是系统type字节类型
buf.writeIntBE(value, offset, byteLength[, noAssert]);//noAssert 值为 true 时， 不再验证 value 和 offset 的有效性。 默认是 false。
read
buf.readUIntLE(offset, byteLength[, noAssert])
buf.readUIntBE(offset, byteLength[, noAssert])
buf.readIntLE(offset, byteLength[, noAssert])
buf.readIntBE(offset, byteLength[, noAssert])

var data=buf.toString([encoding][, start][, end])//输出解码后的数据
var jsonObject=buf.toJSON([buf]);//{"type":"Buffer","data":[116,101,115,116]}
buf[index];
var num=buf.compare(otherBuffer);
var boolean=buf.equals(otherBuffer);//是否内容相同
sourceBuf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])//targetBuffer是储存buffer;sourceBuf是被复制的资源
var buffer=buf.slice([start][, end]);//截取
解析Buffer储存内涵：Buffer是储存的是十六进制的两位数如<Buffer 00 00 73>但是再进行的是二进制编码储存,对应着0-255的整数:通过buf[i]可以看出,再通过toString();将其转化为对应的字符；
buf.fill(value[, offset][, end]);//使用指定的 value 来填充这个 buffer。
类: SlowBuffer//返回一个不被池管理的 Buffer。


fileSystem=fs//文件系统模块是一个封装了标准的 POSIX 文件 I/O 操作的集合。所有的方法都有同步和异步两种模式。
var fs = require('fs');
fs.unlink(filepath, [callback(er)]);//删除文件操作。
fs.unlinkSync(filepath);//删除文件操作。
fs.link(srcpath,dstpath, [callback(err)]);//创建硬链接:把文件存在指定的路径下的未存在的文件里；但是不能存在已有的文件中
fs.linkSync(srcpath,dstpath);//创建硬链接;建立文件链接
// 硬链接就是备份，软连接就是快捷方式
fs.symlink(target, dstpath[, type(file/dir)], callback(err))//创建符号链接,
fs.symlinkSync(target, path[, type])
fs.readlink(filepath/dirpath[, options(encoding)], callback(err, linkString));//读取链接源地址;
var linkString=fs.readlinkSync(filepath/dirpath[, options(encoding)]);

fs.access(path,[mode],callback(err))//测试路径指定的文件的用户权限
fs.accessSync(path,[mode],)//测试路径指定的文件的用户权限

fs.appendFile(file, data[, options], callback(err))//[, options:{encoding,mode,flag}
fs.appendFileSync(file, data[, options]);

fs.chmod(path, mode, callback(err))//该方法以异步的方式来改写文件的读写权限。
fs.chmodSync(path, mode)

fs.chown(path, uid, gid, callback(err))//更改文件所有权。uid用户ID,gid群体身份(指共享资源系统使用者的身份)
fs.chownSync(path, uid, gid)

fs.close(fd, callback(err))//以异步的方式关闭文件。fd:文件open时传递的文件描述符
fs.closeSync(fd)

// options均为其对象的属性
stream
fs.createReadStream(path[, options])//options:flags: 'r',coding: null,fd: null,mode: 0o666,autoClose: true;start <Integer>,end <Integer>
// 如果autoClose为false时，文件描述符将不会被关闭，即使他们报错了。
// 最好把它关闭掉 并确保不会出现文件描述符泄漏。
// 如果autoClose为true时(默认的行为)，对错误或结束的文件描述符将自动关闭。
fs.createWriteStream(path[, options])

fs.exists(path, callback(exists))//测试某个路径下的文件是否存在
var boolean=fs.existsSync(path);//callback(exists)的exists=boole

fs.fchmod(fd, mode, callback(err))//更改文件权限（文件描述符）。
fs.fchmodSync(fd, mode)
fs.fchown(fd, uid, gid, callback(err))//更改所有权（文件描述符）。
fs.fchownSync(fd, uid, gid)

fs.fdatasync(fd, callback)//数据同步
fs.fdatasyncSync(fd);

fs.fstat(fd, callback(err,status))//根据文件描述符获取文件信息。
// status:{dev : 0 ,mode : 33206 ,nlink : 1 ,uid : 0 ,gid : 0 ,rdev : 0 ,ino : 0 ,size : 378(字节) ,atime : 访问时间,mtime : 修改时间,ctime :
var fs.stats=fs.fstatSync(fd); 

fs.fsync(fd, callback(err))//同步磁盘缓存。
fs.fsyncSync(fd)

fs.ftruncate(fd, length, callback(err))//文件内容截取操作// length截断长度，只保留该字符长度内的字符，超出部分将被清除。
fs.ftruncateSync(fd, len)

fs.futimes(fd, atime, mtime, callback(err))//更改一个文件所提供的文件描述符引用的文件的时间戳。
fs.futimesSync(fd, atime, mtime)

fs.lchmod(path, mode, callback(err))//更改文件权限（不解析符号链接）。
fs.lchmodSync(path, mode)

fs.lchown(path, uid, gid, callback(err))//更改文件所有权（不解析符号链接）。
fs.lchownSync(path, uid, gid)

fs.lstat(path, callback(err,stats))//获取文件信息（不解析符号链接）。
var fs.stats=fs.lstatSync(path)

fs.mkdir(dirpath[, mode], callback(err))//以异步的方式创建文件目录。如果目录已存在，将抛出异常。
fs.mkdirSync(dirpath[, mode]);
fs.rmdir(dirpath, callback(err))//以异步的方式删除文件目录。
fs.rmdirSync(dirpath);
fs.mkdtemp(onlydir-prefix(前缀), callback(err,folder));//也是dir
//创建一个唯一的临时目录;生成要在所需的前缀后面添加的六个随机字符，以创建一个唯一的临时目录
//folder:他创建的文件夹路径作为一个字符串传递给回调的第二个参数
var folder=fs.mkdtempSync(template);

fs.open(path, flags[, mode], callback(err,fd));
flags:r,r+,rs,rs+
flags:
	The file is created (if it does not exist) or truncated (if it exists)
	:w,wx,w+,wx+,a,ax,a+,ax+;
	wx+: Like 'w+' but fails if path exists=>>x=but fails if path exists
	ax+:Like 'a+' but fails if path exists=>>a=append追加打开文件。
	"+"=reading and writing. 

var fd=fs.openSync(path, flags[, mode]);

fs.read(fd, buffer, offset, length, readposition, callback(err, bytesRead, buffer))//根据指定的文件描述符fd来读取文件数据并写入buffer指向的缓冲区对象。相对于readFile提供了更底层的接口。
var bytesRead=fs.readSync(fd, buffer, offset, length, position)

fs.readdir(path[, options], callback(err, filesArray))//options:encoding;
//If the encoding is set to 'buffer', the filenames returned will be passed as Buffer objects.
// 如果编码设置为“缓冲”，该文件将作为缓冲区对象通过返回。
var object=fs.readdirSync(path[, options]);//object:filesArrayName OR [Buffer]就是显示文件名的方式不同

fs.readFile(file/fd[, options(encoding,flag)], callback(err,data))//
var data=fs.readFileSync(file[, options(encoding,flag)])



fs.realpath(path[, options(encoding)], callback(err,resolvePath))//根据相对地址转换为绝对地址
var resolvePath=fs.realpathSync(path[, options])

fs.rename(oldPath, newPath, callback(err))//修改文件名称，可更改文件的存放路径。
// 如果new的路径错误会导致文件别删除或报错；
fs.renameSync(oldPath, newPath);

fs.rmdir(dirpath, callback(err))//以异步的方式删除文件目录。
fs.rmdirSync(dirpath);

fs.stat(path, callback(err, stats))//获取文件描述信息
var fs.Stats=fs.statSync(path);
// stats:{ dev: 578534449,
//   mode: 16676,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: undefined,
//   ino: 4503599627490444,
//   size: 0,
//   blocks: undefined,
//   atime: accesstime,访问时间
//   mtime: modifytime,移动时间包括修改
//   ctime: createtime
//   birthtime: 创建时间 }


fs.truncate(filepath, len, callback(err))//文件内容截取操作。
fs.truncateSync(filepath, len);
fs.ftruncate(fd, len, callback(err))//文件内容截取操作。
fs.ftruncateSync(fd, len);
fs.unlink(filepath, callback)
fs.unlinkSync(filepath)

fs.unwatchFile(filename[, listener])//停止监视文件名的更改。
fs.watchFile();
fs.watch();

fs.utimes(path, atime, mtime, callback(err));//异步方式修改文件时间戳。
fs.utimesSync(path, atime, mtime);


var fs.FSWatcher=fs.watch(path[, options(persisit:boolean,recursive:boolean,encoding)][, listener(event,filename)])
// 监视文件目录或文件和所有子目录或当前目录// event是事件类型：rename和change//filename是文件名不是路径
fs.FSWatcher.close();
fs.watchFile(filename[, options(persisit:boolean,interval:Integer)], listener(currFSStats, prevFSStats))//注意改变文件名。每次访问文件时，都会调用回调侦听器。
(currFsStats, prevFsStats):These stat objects are instances of fs.Stats.

fs.write(fd, buffer, offset, length[, position], callback(err,bytesWrite,buffer))//写文件，将缓冲区内数据写入使用fs.open打开的文件
fs.write(fd, data[, position[, encoding]], [callback(err, written, string)])//这种写法将数据data写入文件（根据文件描述符fd来查找文件）。如果数据不是一个缓冲区的实例值将被强制转换为一个字符串。
fs.writeFile(file, data[, options(encoding,flag,mode)], callback(err))//以异步的方式将data写入文件，文件已存在的情况下，原内容将被替换。
fs.writeFileSync(file, data[, options])
fs.writeSync(fd, buffer, offset, length[, position])
fs.writeSync(fd, data[, position[, encoding]]);

EVENT:
	Class: fs.FSWatcher
		Change/error
		watcher.close();
	Class: fs.ReadStream
		open:fd <Integer> Integer file descriptor used by the ReadStream.
		Emitted when the ReadStreams file is opened.
		close:fs.close()运行时触发close事件;
		readStream.path
	Class: fs.Stats:
		stats.isFile()
		stats.isDirectory()
		stats.isBlockDevice()
		stats.isCharacterDevice()
		stats.isSymbolicLink() (only valid with fs.lstat())
		stats.isFIFO()
		stats.isSocket();

		Stat Time Values:
		{
			atime "Access Time",
			mtime "Modified Time",
			ctime "create Time" ,
			birthtime "Birth Time" 
		}
	Class: fs.WriteStream:
		open:Emitted when the WriteStreams file is opened.
		close:fs.close()时,触发;
		writeStream.bytesWritten
		writeStream.path

PATH:
	function:
	path.normalize(p);
	path.resolve(path,...)
	path.relative(currpath,targetpath)//targetpath相对currpath的相对路径；
	filename=path.basename(path[, ext]);//返回文件的名带后缀，如果指定了后缀名这返回文件名
	extname=path.extname(path);//返回后缀名
	dirpath=path.dirname(path);//返回文件的目录路径
	var pathstring=path.format(pathObject)//组合路径
	// path.format({
		// dir: '/home/user/dir',
		// base: 'file.txt'
	// });
	var boolean=path.isAbsolute(path);
	var concatPath=path.join([path1][, path2][, ...]);
	var pathObject=path.parse(path);
	//path.parse('/home/user/dir/file.txt')
		// returns
		// {
		//    root : "/",
		//    dir : "/home/user/dir",
		//    base : "file.txt",
		//    ext : ".txt",
		//    name : "file"
	// }
	var realtive=path.relative(frompath, topath);//获取frompath到topath的路径的相对关系;
	var pathAbsolute=path.resolve([from ...], to);//指定路径from的同路径的绝对路径
	path.sep//获取系统的文件分隔符；'/or\\'
	path.delimiter//指定系统路径分隔符  ':or;'


Global Objects

Class: Buffer
	__dirname
	__filename

	getId=setImmediate(callback, [,arg1...])
	clearImmediate(getId)
	setInterval(function,time)
	clearInterval(intervalObject)
	setTimeout(function,time)
	clearTimeout(timeoutObject)
	console,global,module
	exports:exports.fnname,module.exports
	process
	require(),require.cache,require.extensions
	require.extensions['.sjs'] = require.extensions['.js'];

HTTP:To use the HTTP server and client one must require('http').
	http.Agent Object
		http.get(options,callback(res)).on('socket',socket.emit('agentRomove'))
		var agent=new Agent([options](keepAlive,keepAliveMsecs,maxSockets,maxFreeSockets));
		



NET SERVER:socket为端口对象；
	Object:
	net.createServer([options(allowHalfOpen)],[connectionListener(socket)])
	event:
		server: 'connection',
		server:'listenering'
	function:
		server.listen(port,[host],[backlog],[function()])
		address=server.address()
???
	socket.address();
	socket.connect(options, [connectListener]);
	socket.connect(path, [connectListener]);
	socket.connect(port, [host], [connectListener]);
	socket.destroy();
	socket.end();
	socket.pause();
	socket.ref();
	socket.resume();
	socket.unref();
	socket.write(data, [encoding], [callback]);
	socket.bind([port], [address], [callback]);
	socket.bind(options, [callback]);
	socket.bytesRead
	socket.bufferSize
	socket.close([callback]);
	socket.setEncoding([encoding])

PROCESS：
	var Objectmemory=process.memoryUsage();Objectmemory={rss:;heapTotal:;heapUsed:;}
	process.nextTick(callback);
	setImmediate(callback, arg1, arg2, arg3);
	process.abort();
	process.chdir(directory);
	process.cwd();
	process.exit([code]);
	process.getgid()//no windows
	process.setid(id);
	process.getuid();//no windows
	process.setuid(id)//no windows
	process.getgroups()//no windows
	process.setgroups(groups)//no windows
	

StringDecoder:
	var StringDecoder=require('string_decoder').StringDecoder;
	 decoder = new StringDecoder('utf8');
	 decoder.write(buffer OR content)
	 decoder.end();