var mongodb=require('mongodb');//get mongodb module;
var server=new mongodb.Server(host,port,[options]);//create mongodb server;
var db=new mongodb.Db(dbName,server,[options]);//create db object;

db.open(function (err,db){});
db.close([boolean forceClose],[callback(err)]);
db.on('close',function (err,db){});

db.collection(collectionName,[options],[function (err,collection){}]);
collection.insert(document,[options],[function (err,document){}]);//document is json;
collection.find(selector,[options]);->return Object Cursor
collection.find(selector,[options]).toArray(function (err,document){});
collection.findOne(selector,[options],[function (err,document){}])
	selector:
		{name:value}
		{name:{$in:[value,value2...]}};equal or;
		{name:{$lt:10}}//originate mongodb queringstring and so on;
		{$or:[{name:value}，{name:value}]};
		more:
			{'docus.name':value}
			{'array.index':value}

		options isObject:{
			field:{name:0or1,name:0or1},
			sort:{name:-1or1,name:-1or1},
			sort:[[name,-1or1],[name,-1or1]]
			limit:num,
			skip:num,
			hint:{name:num},
			max:{name:value},
			min:{name:value}
			explain:boolean,
			raw:boolean,
		}other{returnKey:boolean}

collection.update(selector,NewDocument,[options],[function (err,resultNewnum){}]);
	newDocument:{
		$set:{name:changeValue}
	}
collection.findAndModify(selector,sort,NewDocument,[options],function (err,document){});
collection.findAndRomove(selector,sort,[options],function (err,document){});
collection.remove([selector],[options],[function (err,resultremovenum){}]);
collection.createIndex({name:value},function (err,indexname));
