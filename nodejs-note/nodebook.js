repl:{
	.break
	.help,
	.clear,
	.save,
	.load,
	.exit
};
console:{
	console.log([%s],var),
	console.log(var1,var2..),
	node filejs 1>logs.log;
	console.log=console.info;

	console.error()=console.warn();
	node filejs 2>err.log;

	console.dir(object);look up the detail of this;

	console.time(label);time start,
		console.timeEnd(label);time end;
	console.trace(label);label is the name of TRace,capture stderr output;
	console.assert(expression,'string');
}
setTimeout(callback,ms,[arg1....]);
	setInterval(callback,ms,[arg1...]);
	clearInterval(timer);
	clearTimeout(timer);
	timer.unref();cancel this callback;
	timer.ref();reply this callback;
	process.nextTick(callback);
	setImmediate(callback, arg1, arg2, arg3);
module relative global function:{
	require(./file,../file,/path/file,./dir,file,dir);
	module:current module;
	module.parent->this module requried first module;/,module.children->get this module require all module but not default module;
	module.loaded->get boolean;
	module.filename->get complete filepath;
		moduel.id
		get:module.exports=module.require(id)
	require.main:master module;
		require.main.filename.
	require.resolve('./file');get complete Path;
	require.cache:get all cache module Array;
	delete require.cache[require.resolve('./file')];delete this cache module;
	variable:{
		__filename,
		__dirname
	}
}
********************************************************************************
EventEmitter:{var Emitter=new require('events')
	Emitter.addListener(event,listener)
	Emitter.on(event,listener)
	Emitter.once(event,listener)
	Emitter.removeListener(event,listener)
	Emitter.removeAllListeners([event]);
	Emitter.setMaxListeners(n);
	Emitter.getMaxListeners();
	Emitter.eventNames();--->Returns an array listing the events for which the emitter has registered listeners
	Emitter.listeners(event):get listeners Array;
	Emitter.prependListener(eventName, listener(stream))
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Emitter.emit(event,[arg1,....]);
	EventEmitter.defaultMaxListeners;
	Emitter.listenerCount(event)
	EventEmitter.listenerCount(emitter, event);is self Class ;not a class example;
	Eventspecial:{'removeListener','newListener'}:emitter.on('newListener',function (event,relativeListener));
}
**************************************************************************************************
Debug:{$ node debug myscript.js
	node debug [filename],
	continue,next,step,out:c,n,s,o;
	watch(expression);
	unwatch(expression);
	setBreakpoint(filename,line)；sb(filename,line);
	clearBreakpoint(filename,line):cb(filename,line);
	others:{
		breaktrace,
		list(n),
		repl,
		restart,
		kill,
		run,
		scripts:get require modules but self is not in this;
		version,
	}
	node-inspector module;
};
NPM:{
	globalpath:NODE_PATH,
	module:{
		module.id;master module id is '.',others module is their resolve path;
		module.filename,
		module.loaded;boolean;
		module.parent;
		module.children:return moduel Array object;
	}
	command:{
		npm search packageName;
		npm view packageName;
		npm install packageName;in current list,create node_module file containing package;
		npm install -g name;in global,create file package;
		npm root -g ;look over -g path;
		npm config set prefix 'D:\node';appointed mountpath globally;
		npm list;get the current catalog package;
		npm list -g;this is global;
		npm uninstall packageName;unintall;
		npm uninstall -g packageName;
		npm update packageName;
		npm update -g packageName;
		npm update;
		npm update -g;
	}
};
***************************************************************************************
***************************************************************************************
Buffer:{
	var buffer=new Buffer(size);buffer is 0-255 mapped this contents by different coding;but stroage by hexadecimal(16);
	var buffer=new Buffer(Array);
	var buffer=new Buffer('String',[encoding]);encoding:{default:'utf8','ascii','utf16le','ucs2','base64','binary','hex'};
	buffer.fill(value,[offset],[end]);
	buffer.length;/buffer[index];
	buffer.slice([start, [end]]);
	buffer.toString([encoding,start,end]);
	buffer.write('string',[offset,length,encoding]);

	var buffer=Buffer.concat(listArray-buffer,[totalTypelength])
	var num=Buffer.byteLength('string',[encoding]);
	boolean=Buffer.isBuffer(obj);
	boolean=Buffer.isEncoding(encoding);

	var bufferSring=JSON.stringify(buffer);string;
	var Json=JSON.parse(bufferSring);objectdata

	var bufferJson=buffer.toJSON([buffer]);object;
	bufferSource.copy(targetBuffer,[targeStart,sourceStart,sourceEnd]);
	var num=buffer.compare(otherbuffer);
	StringDecoder:{
		var StringDecoder=new require('string_decoder').StringDecoder([encoding]);
		var string=StringDecoder.write(buffer);get decode string;equal buffer.toString();

	};
	--------------------------
	method:{
		Buffer.from(array/buffer/)
	}
};
FS:{fileSystem:
	fs.readFile(file/fd, [encoding,flag], function(err,data){this data is encoded;})
		var data=fs.readFileSync(file/fd, [encoding,flag]);
	fs.writeFile(file, data, [{options:encoding,mode,flag}], [function (err){}]);
		fs.writeFileSync(file, data, [{options:encoding,mode,flag}])
	fs.appendFile(file, data, [{options:encoding,mode,flag}], [function(err){}]);
		fs.appendFileSync(file, data, [{options:encoding,mode,flag}]);
	fs.open(file, flags, [mode], function (err,fd){})
		var fd=fs.openSync(path, flags, [mode]);
	fs.read(fd, buffer, offset, length, position,function (err,bytesRead,buffer){});
		var bytesRead=fs.readSync(fd, buffer, offset, length, position);
	fs.write(fd, buffer, offset, length, [position],function (err,bytesWrite,buffer){});
		var bytesWrite=fs.writeSync(fd, buffer, offset, length, [position]);
	fs.close(fd,[function (err){}]);
		fs.closeSync(fd);
	fs.fsync(fd,[function (err){}]);
		fs.fsyncSync(fd);
	fs.mkdir(dirpath, [mode], function (err){});
		fs.mkdirSync(dirpath, [mode]);
	fs.readdir(dirpath, function (err,filesArray){});
		var filesArrary=fs.readdirSync(path);
	fs.stat(dir/file,function (err,stats){
		stats is Object fs.Stats:{possess property method;
			stats.isFile();
			stats.isDirectory();
			stats.isBlockDevice();
			stats.isCharacterDevice();
			stats.isSymbolicLink() (only valid with fs.lstat());
			stats.isFIFO();
			stats.isSocket()
			property:{
				dev,
				ino
				mode 
				nlink,
				uid,
				gid,
				rdev,
				size,
				atime/mtime/ctime/birthtime
			}
	})
	fs.lstat(dir/file, function (err,stats){});
		var FS.Stats=fs.statSync(dir/file);
		var FS.Stats=fs.lstatSync(dir/file);
	fs.fstat(fd,function (err,stats){});
		var FS.Stats=fs.fstatSync(fd);
	fs.exists(dir/file, function (exists){});
		var exists=fs.existsSync(dir/file);
	fs.realpath(dir/file, [cache], function (err,resovedPath){});
		for example cache:{string:string,'/path':'home/path'};
		var resolvedPath=fs.realpathSync(dir/file, [cache]);

}



SERVER TCP/UDP/HTTP/HTTPS
	TCP:{
		server:
			var server=net.createServer([options{alowHalfOpen:boolean,},function (socket)]);
				server.on('connection',function (socket));

			server.listen(port,[host],[backlog],[function()]),
				server.listen(path,[backlog],[function()]),
				server.listen(handle,[backlog],[function()]);handle can is Object server ,Object socket or fd;
					server.on('listening',function());
				server.listen(options,[function()]);

			server.on('error',function (error){
				error.code:[ERDDINUSE,ECONNRESET]
			});

			this.address=server.adderss()->{port,address,family};used after listeningEvent;
			server.getConnectons(function (error,count));
				server.maxConnections=mun;
			server.close(function (error));
				server.on('close',function (error));
			server.ref()/unref();return server;

		socket:Object net.socket;server and client:everything is a server but aclient:
			this.adderss=socket.address()->{port,adderss,family};
			event:['close','connect','data','end','error','drain','lookup','timeout']
			
			socket.bytesRead;->get bytes from client to server;
			socket.bufferSize;
			socket.bytesWrite;
			
			socket.setEncoding([encoding]);
			socket.pipe(destination,[options:{end:boolean}]);
				socket.unpipe([destination]);

			socket.on('data',function(data){data.toString()});
				socket.pause();
				scoket.resume();
			socket.on('end',function());

			socket.setTimeout(timenum,function());timenum is 0 explain cancel
				socket.on('timeout',function());

			socket.remoteAddress/.remotePort/.remoteFamily/.localAddress/.localPort/.localFamily;
			boolean socket.write(data,[encoding],[function()]);
			socket.end([data],[encoding]);
				socket.on('end',function());
			socket.on('error',function (err))
				socket.destroy();
				socket('close',function (had_error))
			socket.setKeepAlive([boolean],[delaytime])
			client socket:{
				var socket=new net.Socket([options:{
					fd:port and address,
					type:'tcp4/tcp6/unix',
					allowHalfOpen:boolean,
				}]);
				socket.connect(port,[host],[function()]);
					socket.on('connect',function());
					socket.connect(path,function());
					socket.connect(options,function());
			}
		net:{
			net.connect(3)->return a new Socket;
			net.createConnection(3)->return a new Socket;
			net.createServer()->return a server;
			net.isIP(para)/.isIpv4(para)/.isIPv6(para)
		}	

	}	

	UDP:{socket is server
		socket=dgram.createSocket(type,[function (msg,remoteinfo)]);
			socket.on('message',function (msg,remoteinfo)),
				remoteinfo:{adderss,family,port,size};
		socket.bind(port,[address],[function ()]);
			socket.on('listening',function ());
		socket.send(buffer,[offset,length,]port,adress,[function (err,sendbytes)]);
		this.adderss=socket.address()->{port,adderss,family};
		socket.close([function()]);
			socket.on('close',function());
		socket.unref();
			socket.ref();
		socket.on('error',function (error));

		socket.setTTL(ttl);
		socket.setBroadcast(boolean);
			socket.addMembership(multicastAddress, [multicastInterface]);
			socket.dropMembership(multicastAddress, [multicastInterface]);
			socket.setMulticastTTL(ttl);
			socket.setMulticastLoopback(boolean);
	}
	HTTP and HTTPS:{
		header:Connection:keep-alive;
		var server=http.createServer([function (request,response)]);
			server.on('connection',function (socket));
			server.on('request',function (request,response));
		server.listen(port,[host],[backlog],[function()]);
			server.on('listening',function());
		server.close();
			server.on('close',function());
		server.on('error',function (error));
		server.setTimeout(time,function (socket));
			server.timeout=time;
			server.on('timeout',function (socket));
		get client info:
			Object http.IncomingMessage:is request{
				header:{
					request.method,
					request.url,
					request.headers,
					request.http Version,
					request.trailers,
					request.socket
					request.url:{querystring.parse(obj,[sep],[eq],[options])};
					request.statusMessage
					}
				}
		
		http.ServerResponse:{
			response.writeHead(statusCode,[statusMessage],[headers])
				headers:{
					content-type:"css": "text/css",
					    "gif": "image/gif",
					    "html": "text/html",
					    "htm": "text/html",
					    "ico": "image/x-icon",
					    "jpeg": "image/jpeg",
					    "jpg": "image/jpeg",
					    "js": "text/javascript",
					    "json": "application/json",
					    "pdf": "application/pdf",
					    "png": "image/png",
					    "svg": "image/svg+xml",
					    "swf": "application/x-shockwave-flash",
					    "tiff": "image/tiff",
					    "txt": "text/plain",
					    "wav": "audio/x-wav",
					    "wma": "audio/x-ms-wma",
					    "wmv": "video/x-ms-wmv",
					    "xml": "text/xml"
					location:redirect url;
					content-length:
					set-cookie:'name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com;path=/; secure'
					content-encoding:
					Cache-Control:
					Expires:
					Etag:
					Access-Control-Allow_Origin:host+[port]	
				};
				response.addTrailers(headers);
			function
				response.setHeader(name,value);
				response.getHeader(name);
				response.removeHeader(name);
			property:
				response.headersSent;
				response.statusCode;
				response.sendDate;
				response.statusMessage;this descripte statusCode information;
				response.finished;boolean
			function and event:
				boolean write(chunk,[,encoding],[function()]);
				response.on('timeout',function());
					response.setTimeout(ms, [function()]);
				response.on('close',function());before end find connection interrupt emitter this event;
		}
		Object http.clientRequest:
			clientServer:
			client=http.request(options,function (response));
			client=http.get(options,function (response))
				options:{
					host,port,hostname,localAddress,socketPath,method,path,headers,auth,agent
				};
				client.on('response',function (response));
			client.write(chunk,[encoding],[function])
			client.end([chunk],[encoding],[function]);
			client.setTimeout(ms,[ function()]);
				client.on('timeout',function());

			function and event:{
				client.abort();
					client.on('abort',function());
				clinet connection process
				client.on('checkExpectation',function (req,res));
				client.on('connect',function (res,socket,head));
				client.on('continue',function ());
				client.on('socket',function (socket));

				client.on('response',function (response));
				client.on('error',function (error));
			}
		Object http.agent:this is clientServer in Server;

	}	
	HTTPS{
		before create https server
			create privatekey:{
				openssl genrsa -out privatekey.pem 1024
				openssl req -new -key privatekey.pem -out certrequest.csr;
				openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out sertificate.pem;

			}
	}


	PROCESS:{
		function and event:{
			process.memoryUsage()->rss/heapTotal/heapUsed;
			process.nextTick(function());
			setImmediate(function());
			setTimeout(function(),0);

			process.abort();
			process.chdir(directory);
			process.cwd();
			process.exit([code]);
			process.kill(pid,[signal]);	
			process.umask([mask]);-> return old mask 
			process.uptime();
			process.hrtime();

			process.getgid();
				process.setgid(id);
			process.getuid();
				process.setuid(id);
			process.getgroups();
				process.setgroups(groups);

			process.on('exit',function(code));
			process.on('uncaughtException',function (error));
			process.on('SIGINT',function());
			process.send(message,[sendHandle,options,function()]);
				process.on('message',function(message));
		}
		children Method:{child_process=require('child_process');
			spawn:process/command is node and others,this args is that filejs one two ...
				var childprocess=child_process.spawn(command,[args],[options]);
				childprocess.on('close',function (code,signal));
					childprocess.on('exit'，function (code,signal))
				childprocess.on('error',function (error));
				childprocess.kill([signal]);
				childprocess.on('disconnect',function());
				childprocess.unref();
			fork:process moduel,this module process not file process
				var forkprocess=child_process.fork(modulePath,[args],[options]);
				forkprocess.send('message',[sethandle]); sethandle is function,Object Server and Socket; 
				process.send('message',[sethandle]);
				forkprocess.on('message',function (message,[sethandle]))
				process.on('message',function (message,[sethandle]));
			exec:run command process/this command like 'node file.js one two'
				execprocess=child_process.exec(command,[options],[function (error,stdout,stderr)]);
			execFile:this exec file
				child_process.execFile(file,[args],[options],[function (error,stdout,stderr)])
		}
		cluster more childprocess:{var cluster=require('cluster');
			var worker=cluster.fork([env]);this worker is nodejs process new Object;
				cluster.on('fork',function (worker));open emitter
				cluster.on('online',function (worker));run emitter
			cluster.workers->get a Array of the worker;
			cluster.worker,
			cluster.worker.id,
			boolean cluster.isMaster;
			boolean cluster.isWorker;
			cluster.on('listening',function (worker,address));child server listen emitter:'address{port,address,adressType}'
			cluster.setupMaster([settings]);setings:{exec:filename,args:one...,silent;boolean,stdio:array}
				cluster.settings;
			worker.send('message',[sethandle]);
				process.on('message',function (message,[sethandle]));
			process.send('message',[sethandle]);
				worker.on('message',function (message,[sethandle]));
			worker.kill([signal]);
				worker.destroy([signal]);
			worker.on('exit',function (code,signal))
			worker.on('error',function (error));
			worker.disconnect();interrupt other connection;
				worker.on('disconnect',function());
		}
	}

	DOMAIN:{var domain=require('domain').create();
		domain:
			domain.once('error',function(err));
			domain.run(function());
			domain.add(emitter);
			domain.remove(emitter);
			domian.bind(callback)->return callback;err must used throw ;
			domian.intercept(callback);

			Domain._stack;
			domian.exit();
				domain.enter();
			domain.dispose();
		assert:assert=require('assert');
			assert.equal(actual,expected,[message])
				assert.notEqual(actual,expected,[message]);
				assert.strictEqual(actual,expected,[message]);
				assert.notStrictEqual(actual,expected,[message]);
			assert.ok(value,[message]);=assert(value,[message]);
			assert.deepEqual(actual, expected, [message]);
				assert.notDeepEqual(actual, expected, [message]);
			assert.throws(block, [error], [message])
				assert.doseNotThrows(block, [error], [message]);

	}

	CRYPTO:{var crypto=require('crypto');
		crypto.getCiphers();
		crypto.getHashes();
		hash:
		var hash=crypto.createHash(algorithm);
			hash.update(data, [input_encoding], [output_encoding]);
			hash.digest([encoding]);
		var hmac=crypto.createHmac(algorithm,key);
			hmac.update(data);
			hmac.digest([encoding]);
		cipher:{
			var cipher=crypto.createCipher(algorithm, password);
			var cipheriv=crypto.createCipheriv(algorithm, password, iv);
			cipher.update(data, [input_encoding], [output_encoding]);
			cipher.final([output_encoding]);
		}
		decipher:{
			var decipher=crypto.createDecipher(algorithm, password);
			var decipheriv=crypto.createDecipheriv(algorithm, password, iv);
			decipher.update(data, [input_encoding], [output_encoding]);
			decipher.final([output_encoding]);
		}
		sign:{
			var sign=crypto.createSign(algorithm);
			sign.update(data);
			sign.sign(private_key,[output_format]);
		}
		verify:{
			var verify=crypto.createVerify(algorithm);
			verify.update(data);
			verify.verify(object,signature,[signature_format]);
		}
	}
	ZLIB:{var zlib=require('zlib');
		zlib.createGzip([options]);
			zlib.createGunzip([options]);
		zlib.createDeflate([options]);
			zlib.createInflate([options]);
		zlib.createDeflateRaw([options]);
			zlib.createInflateRaw([options]);
		zlib.createUnzip([options]);

		zlib.gzip(bufferAndString,[options],function (err,buffer));
			zlib.gzipSync(bufferAndString,[options]);
			zlib.gunzip(bufferAndString,[options],function (err,buffer));
			zlib.gunzipSync(bufferAndString,[options]);
		zlib.deflate(bufferAndString,[options],function (err,buffer));
			zlib.deflateSync(bufferAndString,[options]);
			zlib.inflate(bufferAndString,[options],function (err,buffer));
			zlib.inflateSync(bufferAndString,[options]);
		zlib.deflateRaw(bufferAndString,[options],function (err,buffer));
			zlib.deflateRawSync(bufferAndString,[options]);
			zlib.inflateRaw(bufferAndString,[options],function (err,buffer));
			zlib.inflateRawSync(bufferAndString,[options]);
		zlib.unzip(bufferAndString,[options],function (err,buffer));
			zlib.unzipSync(bufferAndString,[options]);
	}
	DNS:{var dns=requrie('dns');
		dns.resolve(domain,[rrtype],function (error,address));
			resolve:{resolve4,resolve6,resolveMx,resolveTxt,resolveSrv,resolveNs,resolveCname}
		dns.lookup(domain, [{family,hints,all}], function (error,address,family));
		dns.reverse(ip,function (error,domains))
	}
	PUNYCODE:{var punycode = require('punycode');
		version: '1.3.2',
		ucs2: 
			{ decode: [Function: ucs2decode],
			 encode: [Function: ucs2encode] },
		decode: [Function: decode],
			encode: [Function: encode],
		toASCII: [Function: toASCII],
			toUnicode: [Function: toUnicode] 
	}
	OS:{var os=require('os');
		hostname: [Function: getHostname],
		loadavg: [Function: getLoadAvg],
		uptime: [Function: getUptime],
		freemem: [Function: getFreeMem],
		totalmem: [Function: getTotalMem],
		cpus: [Function: getCPUs],
		type: [Function: getOSType],
		release: [Function: getOSRelease],
		networkInterfaces: [Function: getInterfaceAddresses],
		homedir: [Function: getHomeDirectory],
		userInfo: [Function: getUserInfo],
		arch: [Function],
		platform: [Function],
		tmpdir: [Function],
		tmpDir: [Function],
		getNetworkInterfaces: [Function: deprecated],
		EOL: '\r\n',
		endianness: [Function] 
	};
	READLINE:{var readline=requrie('readline');
		rl=readline.createInterface(options:{input,output,completer,terminal});
		rl.close();
		rl.on('line',function (line));emitter this event,when '\n or enter';
		rl.on('close',function());

		rl.pause();
			rl.on('pause',function ());
		rl.resume();
			rl.on('resume',function());
		rl.write(data,key);data is string and buffer,key is for example{ctrl:true,name:'u'};
		rl.setPrompt(prompt,[length]);
			rl.prompt();
		rl.question(query, function (answer));
		rl.on('SIGINT',function());
	};
	UTIL:{var util=require('util');
		util.format(string,[..args]);
		util.inspect(object,[options]); inspect object information;
		util.inherits(constructor, superConstructor)
		VM:{vm=require('vm');
			vm.runInThisContext(code,[filename]);
			。。。。。。
			vm.runInNewContext(code,[context],[filename]);

			var context1=vm.createContext([context]);new context;
				vm.runInContext(code,context1);
			script:
				var script=vm.createScript(code, [filename]);save script;
				script.runInThisContext();run script;
				script.runInNewContext([context]);
		}
	}
	REPL:{var repl=require('repl');
		getrepl=repl.start(options:{prompt,input,output...});
		getrepl.on('exit',function())

	};
Express:{var express=require('express')
	var app=express();
		app.listen(more);
		app.get(path,function (request,response));
		app.post(path,function (request,response));
		app.put(path,function (request,response));
		app.delete(path,function (request,response));
		app.all(path,function (request,response,next));

		1'http.ServerResponse':{
			response.send(data);
			response.sendfile(file);不用set headers;
			stream.pipe(response)
		};
		2'request':{
			response.send(data);
		};
		3'router 路由':{
			path/:id/:name*******path/:id?/:name?;可以加regexp;
				request.params->Object json {id:value,name=value...}
			localhost:port/RegExp
		};
	3'中间件':{
		function middleware (req,res,next){next()};
		app.use([path],function);

	'解析中间件':{
		basicAuth:身份认证[basicAuth(name,value),basicAuth(function (name,value){return boolean;})]
		bodyParser:body解析：bodyParser();
		cookieParser:解析cookie：cookieParser();
		logger:日志解析：logger([options:{immediate:boolean/undefined,format:default/short/tiny/dev....,stream:process.stdout/stream,buffer:time}]);
		methodOVerride:伪类解析:
		response Time:
		router:{}
		***session:session([options:{key,store,fingerprint,cookie{path:"/",httpOnly:boolean,maxAge:num},secret:,}])
			req.session.regenerate(function (error){})
				req.session.destroy(function (error){});
		static:这是express保留的中间件:{
			express.static(pathname,[options{}]);
		directory:用于在web中列出目录下的文件列表;express.directory(path,[options:{filter(file,pos,lsit)/icons}]);
		limit(size);
		}
	}
	}
	4'express 异常处理':{
		错误中间件:function (error,request,response,next){};
	};
	5'more':{
		response.redirect([statusCode],url);
		配置Application:{
			app.configure([env],function());
				env:
					1   :is all environment;
					2'development':针对开发环境;
					2'production':针对产品环境;
			app.set(name,value)------app.get(name)
			app.enable(name)-----app.disable(name)-----app.enabled(name)----app.disabled(name)
			app.set('views',path)->set 'views' 视图路径;
				app.set('view engine','ejs/Haml/jade/JQuery...');set 模版引擎;
				app.engine(name,value)--自定义引擎模版
				response.render(view,[locals],function (error,html));


		}

	}

};



Socket.IO:{var socketIo=require('socket.io');server need install,client need script.src
	server:
	var socketServer=socketIo.listen(server);
		socketServer.on('connection',function (socket){;
			socket.on('message',function (msg));
			socket.send(msg);
		})
	clientServer:{
		script.src=socketUrl.js;
		var socketClient=io.connect([url]);
		socketClient.send(msg)
		socketClient.on('message',function (msg));
		socketClient.on('disconnect',function());
	};
	others{自定义:
		socket.emit(event,data,function (data1...));
		socket.on(event,function (data,function));

	};
	server save userdata:{client update and close userdata distory
		socket.set(name,data,[function()]);
		socket.get(name,function (error,data));
		广播消息:
		1'socketServer.sockets':is all client connected socket; 
			socketServer.sockets.send(message);
			socketServer.sockets.emit(event,data);
				socketServer.sockets.emit('login',names);
		2'socket.boradcast':is all client connected socket but not myself;
			socket.broadcast.send(message);
			socket.broadcast.emit(event,data);
				socket.broadcast.emit('login',names);
		3'namespace':{是设定独自特定的消息接发程序
			socketServer.of(namespace);->Object new socketServer
			var namespaceSocketClient=io.connect('http://localhost/namespace')
		}
	}

}