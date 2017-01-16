
// process.nextTick(function() {
// 	console.log('process延迟执行1');
// 	setImmediate(function() {
// 		console.log('process延迟执行1-setImmediate延迟执行');
// 	});
// });
process.nextTick(function() {
	console.log('process延迟执行2');
	process.nextTick(function() {
		console.log('process延迟执行11');
	});
});
process.nextTick(function() {
	console.log('process延迟执行3');
});
setImmediate(function() {
	console.log('setImmediate延迟执行1');
	process.nextTick(function() {
		console.log('setImmediate延迟执行1-process延迟执行');
	});
});
setImmediate(function() {
	console.log('setImmediate延迟执行2');
});
// console.log('正常执行');