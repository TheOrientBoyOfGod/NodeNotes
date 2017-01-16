var punycode = require('punycode');
var os = require('os');
console.log(punycode)
console.log(punycode.encode('闫奎'));
punycode: {
	version: '1.3.2',
	ucs2: {
		decode: [Function:(pundycode)],
		encode: [Function:(array)]
	},
	decode: [Function: decode],-punycode-other
	encode: [Function: encode],-other-punycode
	toASCII: [Function: (domain)],-other-punycode
	toUnicode: [Function: (domain)]-punycode-other
}
console.log(os.tmpdir())
console.log(os)

OS: {
	hostname: [Function: getHostname],
	loadavg: [Function: getLoadAvg],
	uptime: [Function: getUptime],
	freemem: [Function: getFreeMem],
	totalmem: [Function: getTotalMem],
	cpus: [Function: getCPUs],
	type: [Function: getOSType],
	release: [Function: getOSRelease],
	networkInterfaces: [Function: getInterfaceAddresses],
	homedir: [Function: getHomeDirectory],
	userInfo: [Function: getUserInfo],
	arch: [Function],
	platform: [Function],
	tmpdir: [Function],
	tmpDir: [Function],
	getNetworkInterfaces: [Function: deprecated],
	EOL: '\r\n',
	endianness: [Function]
}


var readline=require('readline');
console.log(readline);
var rl=readline.createInterface( );
console.log(rl)