process.nextTick(function() {
	console.log('process延迟执行2');
});
process.nextTick(function() {
	console.log('process延迟执行3');
});
setImmediate(function() {
	console.log('setImmediate延迟执行1');
	process.nextTick(function() {
		console.log('setImmediate延迟执行1-process延迟执行');
	});
});//存在问题63页
setImmediate(function() {
	console.log('setImmediate延迟执行2');
});