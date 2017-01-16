// 阻塞代码
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
// 非阻塞代码
var fs = require("fs");
fs.readFile("input.txt", function(err, data) {
	if (err) {
		console.log(err.stack);
		return console.error(err);
	};
	// 一旦文件读取错误就会执行err对象，然后结束与运行
	console.log(data.toString())
	console.log(data)
})

// 引入events模块
var events = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定事件
// eventEmitter.on('eventName',eventHandler)
// 绑定 connection 事件处理程序
eventEmitter.on('connection', function() {
		console.log('连接成功');
	})
	// 绑定 data_received 事件处理程序
eventEmitter.on('data_received', function(message) {
		console.log('数据接收成功');
		console.log(message);
	})
	// 触发 connection data_received事件 
eventEmitter.emit('connection');
eventEmitter.emit('data_received','messagesdata');
console.log("执行完毕");

// 创建Buffer
var buffer1 = new Buffer(11000); //创建长度为10字节的Buffer实例：
var buffer2 = new Buffer([10, 20, 10, 10]); //通过给定的数组创建 Buffer 实例：
var buffer3 = new Buffer("www.w3cschool.cn", "utf-8"); //通过一个字符串来创建 Buffer 实例：
console.log('buffer2：' + buffer1);
console.log('buffer2：' + buffer2);
console.log('buffer3：' + buffer3);
// 写入缓冲区
// length=buffer.write(string,[offset],[length],[encoding]);//返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
var length = buffer1.write("string", 0, 3, 'utf-8'); //返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
console.log(length);
console.log(buffer1);
//从缓冲区读取数据
// buffer.toString([encoding],[start],[end]);//解码缓冲区数据并使用指定的编码返回字符串。
var strings = buffer1.toString('utf-8', 0, 0); //解码缓冲区数据并使用指定的编码返回字符串。
console.log(strings);
var buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString('ascii')); // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, buf.length)); // 输出: abcde
console.log(buf.toString('utf8', 0, 5)); // 输出: abcde
console.log(buf.toString(undefined, 0, buf.length)); // 使用 'utf8' 编码, 并输出: abcde
// 将 Buffer 转换为 JSON 对象
var json = buf.toJSON();
console.log(typeof json);
console.log(json);
console.log(buf);
// 缓冲区合并
var buffer1 = new Buffer('W3Cschool教程 ');
var buffer2 = new Buffer('www.w3cschool.cn');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());