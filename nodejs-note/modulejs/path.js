// Node.js path 模块提供了一些用于处理文件路径的小工具
var path=require('path');
var normalize = path.normalize('a/b/c/../user/vajoy/bin');
var join = path.join('/test', 'test1', '2slashes/1slash', 'tab', '..');
var resolve = path.resolve('path.js');
var isAbsolute = path.isAbsolute(resolve);
var relative = path.relative(resolve,'../path.js');
var dirname = path.dirname(resolve);
var basename=path.basename(resolve);
var extname = path.extname(resolve);
var parse = path.parse(resolve);
var format = path.format(parse);

var json = {
	'normalize': normalize,
	'join': join,
	'resolve': resolve,
	'isAbsolute': isAbsolute,
	'relative': relative,
	'dirname': dirname,
	'basename': basename,
	'extname': extname,
	'parse': parse,
	'format': format
};
console.log(json);