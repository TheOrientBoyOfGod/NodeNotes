this index:1var crypto=require('crypto');
this index:2  var zlib=require('zlib');
this index:3  var punycode=require('punycode');
this index:4  // console.info(crypto.getCiphers())
this index:5  // console.info(crypto.getHashes())
this index:6  // var cipher=crypto.createCipher('aes-256-cbc', new Buffer('key'));
this index:7  // cipher.update('data');
this index:8  // console.log(cipher.final('hex'));
this index:9  // const input = '.................................';
this index:10  // zlib.deflate(input, (err, buffer) => {
this index:11  //   if (!err) {
this index:12  //     console.log(buffer.toString('base64'));
this index:13  //     zlib.unzip(buffer, (err, buffer) => {
this index:14  // 	  if (!err) {
this index:15  // 	    console.log(buffer.toString());
this index:16  // 	  } else {
this index:17  // 	    // handle error
this index:18  // 	  }
this index:19  // 	});
this index:20  //   } else {
this index:21  //     // handle error
this index:22  //   }
this index:23  // });
this index:24  // dns.resolve('www.studypay.net','A',function (error,address){
this index:25  // 	console.log(address)
this index:26  // });
this index:27  // var os = require('os');
this index:28  // console.info(os)
this index:29  var readline=require('readline');
this index:30  var fs=require('fs');
this index:31  var readstream=fs.createReadStream(__filename);
this index:32  var writestream=fs.createWriteStream(__dirname+'/readline.js');
this index:33  var index=1;
this index:34  writestream.write(`this index:${index}`,'utf8');
this index:35  function completer(line){
this index:36  	var completions='help error quit aaa qqq'.split(' ');
this index:37  	var hits=completions.filter(function (item,index,array){
this index:38  		return item.indexOf(line)==0;
this index:39  	});
this index:40  	return [hits,line]
this index:41  };
this index:42  var rl=readline.createInterface({
this index:43  	input:readstream,
this index:44  	output:writestream,
this index:45  	completer:completer,
this index:46  	terminal:true
this index:47  });
this index:48  rl.on('line',function (line){
this index:49  	if (line=='exit'||line=='quit') {
this index:50  		rl.close();
this index:51  	}else{
this index:52  		index++;
this index:53  		writestream.write(`this index:${index}  `);
this index:54  		// console.info(`you input:${line}`)
this index:55  	}
this index:56  })
this index:57  