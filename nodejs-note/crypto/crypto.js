var crypto=require('crypto');
var zlib=require('zlib');
var punycode=require('punycode');
// console.info(crypto.getCiphers())
// console.info(crypto.getHashes())
// var cipher=crypto.createCipher('aes-256-cbc', new Buffer('key'));
// cipher.update('data');
// console.log(cipher.final('hex'));
// const input = '.................................';
// zlib.deflate(input, (err, buffer) => {
//   if (!err) {
//     console.log(buffer.toString('base64'));
//     zlib.unzip(buffer, (err, buffer) => {
// 	  if (!err) {
// 	    console.log(buffer.toString());
// 	  } else {
// 	    // handle error
// 	  }
// 	});
//   } else {
//     // handle error
//   }
// });
// dns.resolve('www.studypay.net','A',function (error,address){
// 	console.log(address)
// });
// var os = require('os');
// console.info(os)
var readline=require('readline');
var fs=require('fs');
var readstream=fs.createReadStream(__filename);
var writestream=fs.createWriteStream(__dirname+'/readline.js');
var index=1;
writestream.write(`this index:${index}`,'utf8');
function completer(line){
	var completions='help error quit aaa qqq'.split(' ');
	var hits=completions.filter(function (item,index,array){
		return item.indexOf(line)==0;
	});
	return [hits,line]
};
var rl=readline.createInterface({
	input:readstream,
	output:writestream,
	completer:completer,
	terminal:true
});
rl.on('line',function (line){
	if (line=='exit'||line=='quit') {
		rl.close();
	}else{
		index++;
		writestream.write(`this index:${index}  `);
		// console.info(`you input:${line}`)
	}
})
