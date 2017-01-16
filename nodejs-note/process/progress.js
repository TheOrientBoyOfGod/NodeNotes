// process.on('exit', (code) => {
// 	console.log(`About to exit with code: ${code}`); //上引号，可以输出变量
// });
// process.on('exit', function() {
// 	process.nextTick(function() {
// 		console.log('This will not run');
// 	});
// 	console.log(`About to exit.`);
// 	// console.log(__filename, __dirname);
// 	// console.info(__dirname);
// 	// console.trace()；
// 	console.log('execPath：' + process.execPath);
// 	console.log('execArgv' + process.execArgv);
// 	console.log('env：' + process.env);
// 	console.log('exitCode：' + process.exitCode);
// 	console.log('config：' + process.config);
// 	console.log('pig：' + process.pig);
// 	console.log('title：' + process.title);
// 	console.log('arch：' + process.arch);
// 	console.log(process.platform);
// });

// // process.stdout.write("Hello World!" + "\n");

// // // 通过参数读取
// process.argv.forEach(function(val, index, array) {
// 	console.log('argv'+index + ': ' + val);
// });

// // 获取执行路局
// console.log(process.execPath);
// console.log(`Starting directory: ${process.cwd()}`);
// try {
// 	process.chdir('/tmp');
// 	console.log(`New directory: ${process.cwd()}`);
// } catch (err) {
// 	console.log(`chdir: ${err}`);
// }

//   console.log(`Current uid: ${process.getuid()}`);

// process.abort()

console.log(process.hrtime())