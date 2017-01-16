// Node.js os 模块提供了一些基本的系统操作函数
var os = require('os');
var dir = os.tmpdir();
var cpu = os.endianness();
var hostname = os.hostname();
var type = os.type();
var platform = os.platform();
var arch = os.arch();
var release = os.release();
var uptime = os.uptime();
var loadavg = os.loadavg();
var totalmem = os.totalmem();
var freemem = os.freemem();
var cpus = os.cpus();
var networkInterfaces = os.networkInterfaces();
var json = {
	'dir': dir,
	'cpu': cpu,
	'hostname': hostname,
	'type': type,
	'platform': platform,
	'arch': arch,
	'release': release,
	'uptime': uptime,
	'loadavg': loadavg,
	'totalmem': totalmem,
	'freemem': freemem,
	'cpus': cpus,
	'networkInterfaces': networkInterfaces
};
console.log(json);