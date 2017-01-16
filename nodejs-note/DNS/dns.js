var dns=require('dns');
// console.log(dns)
dns.resolve('www.studypay.com','A',function (err,address){
	console.log(address)
})
dns.lookup('www.studypay.com',4,function (err,address,famliy){
	console.log(address,famliy)
})
dns.reverse('202.165.102.205',function (err,domains){
	console.log(err,domains)
})