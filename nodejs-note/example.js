var fs = require('fs');
// fs.unlink(__dirname+'/nodejs-fileSystem/openfile-write.js', function(err){
// 	console.log(err);
// });
fs.link(__filename,__dirname+'/example.js', function(err){
	console.log(err)
})
