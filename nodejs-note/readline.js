var readline=require('readline');
function completer(line){
	var completions='help error aaa bbb ccc'.split(' ');
	var hlts=completions.filter(function (value){
		return value.indexOf(line)==0
	});
	return [hits,line];
};
var interfaceR=readline.createInterface({
	input:process.stdin,
	output:process.stdout,
	completer:completer
});
interfaceR.setPrompt('input',7);
interfaceR.prompt();
interfaceR.question('what do you think of nodejs',function (answer){
	console.log('myanswer: '+answer);
})
interfaceR.on('line',function (line){
	if (line == 'exit' || line == 'quit' || line == 'q') {
		interfaceR.close()
	}else{
		console.log('you input :'+line);
		interfaceR.prompt();
	}
});
var util=require('util');
var stringinfo=util.inspect(interfaceR,{
	colors:true
});
console.log(stringinfo);