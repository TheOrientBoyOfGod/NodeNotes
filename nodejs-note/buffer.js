// 创建buffer类
// var bufArray = new Buffer([],【'utf-8'】);
var bufArray = new Buffer([300, 20, 30, 30, 0, 01, 02, 73, 97],'utf-8'); //使用二进制编码解析；即使ask编码
console.log(bufArray);//<Buffer 2c 14 1e 1e 00 01 02 49 61>//
console.log(bufArray[0]); //44//
console.log(bufArray[1]); //20//
console.log(bufArray.toString()) //null

// var buffsting = new Buffer('strings',【'utf-8'】);
var buffsting = new Buffer('strings');
console.log(buffsting); //<Buffer 73 74 72 69 6e 67 73>将其转化为
console.log(buffsting.toString()); //73 74 72 69 6e 67 73//将其转化为二进制对应的16进制数据存储；即使ask编码
// 2.写入缓存区
// bufwrite.write('stingsr', 【bufferPos, length, "utf8"】);
var bufwrite = new Buffer(20),
	bufwriteSize = bufwrite.write('stingswritebuffer', 2, 10, "utf8"); //bufwrite的offset=10的位置之后写入目标数据
console.log(bufwrite); //00 00 01 00 00 00 00 00 00 00 73 74 69 6e 67 73 77 72 69 74
console.log(bufwriteSize); //10就是length返回实际写入的大小
console.log(bufwrite.toString()); //前面2个空字符stingswrit，utf8是编码解析，很有用的
// 3.从缓冲区读取数据
// buf.toString([encoding,[start],[end])
var bufreadContent = bufwrite.toString('utf8', 0, 20); //返回对应解析内容；
console.log(bufreadContent); //返回对应解析内容；
// 4.将 Buffer 转换为 JSON 对象
// bufJson = buffj.toJSON([buffj]);
var buffj = new Buffer('www.w3cschool.cn'),
	bufJson = buffj.toJSON(buffj); //{ type: 'Buffer',data: [ 119, 119, 119, 46, 119, 51, 99, 115, 99, 104, 111, 111, 108, 46, 99, 110 ] }
console.log(bufJson);
// 5.缓冲区合并
// var buffConcat = Buffer.concat([bufwrite, buffj], BufferLength);
var buffConcat = Buffer.concat([bufwrite, buffj], 30);
console.log(buffConcat); //<Buffer 00 00 73 74 69 6e 67 73 77 72 69 74 00 00 00 00 00 00 00 00 77 77 77 2e 77 33 63 73 63 68>
console.log(buffConcat.toJSON());
console.log(typeof buffConcat.toJSON());
// 6.缓冲区比较
var buffCompare1 = new Buffer('abc'),
	buffCompare2 = new Buffer('abcasdasa'),
	compareResult = buffCompare1.compare(buffCompare2); //前小后大为负数，前大后小为正值//-1
console.log(compareResult);
// 7.拷贝缓冲区；没有返回值
// bufsource.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
var buffCopy = new Buffer(20);                                            
buffCompare2.copy(buffCopy,3,1,9);
console.log(buffCopy);//<Buffer 00 62 63 61 73 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(buffCopy.toString());//3nul  bcas
// 8.缓冲区裁剪
// buf.slice([start[, end]])
var buffSlice=buffCopy.slice(3,9);
console.log(buffSlice.toString());//bcasda

//比较两个缓冲区是否相等，如果是返回 true，否则返回 false。
// buf.equals(otherBuffer)

bufs = new Buffer(20);

len = bufs.write("awww.w3cschool.cn");
console.log(bufs);
bufs[15]=97;
console.log(bufs.toString())
console.log("写入字节数 : "+  len);

console.log(Buffer.poolSize)

bufs.fill('h');
console.log(bufs.toString())