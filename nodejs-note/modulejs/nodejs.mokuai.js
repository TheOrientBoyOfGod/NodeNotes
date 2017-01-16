console.warn('modulejs');

function hello() {
	this.setName = function(thyname) {
		this.name = thyname;
	};
	this.getName = function() {
		console.log(this.name)
	};
	// console.log(this);
}
module.exports = hello;//返回require的对象名字objectname

// exports.world=function(){//返回require的是exports对象；
// 	console.warn(this);
// 	console.info('成功合作');
// }