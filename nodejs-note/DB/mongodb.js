command：
	启动mongoDB：{
		进入mongodb安装目录的bin文件下运行mongod.exe(服务端)，在运行mongo.exe(client)
	};
	信息操作:{
		
	}
	show dbs;
	use DataNameTarget;    switch or create database
	db;                    check and look over current DataName
	db.dropDatabase();     delete current database 
	db.createCollection("createCollectionName", {capped:true, size:100000});
	db.CollectionName.isCapped();
	db.runCommand({"convertToCapped":"posts",size:10000});
	db.collection.drop();  delete current collection of db
	system
		dbname.system.namespaces;
		dbname.system.indexes;
		dbname.system.profile;
		dbname.system.users;
		dbname.local.sources;
	connect
		mongodb:'//localhost';
		mongodb:'username:password@hostname/[dbname]';

	db.targetCollectionName.insert(document); insert document to targetCollection,if this collection no existent;but create the collection
	db.targetCollectionName.save(document);   insert document to targetCollection:Difference:_id
	
	db.targetCollectionName.find([querystring]); querystring targetCollection data;
	
	db.targetCollectionName.update(querystring,objNew,upsert,multi); update targetCollection data;
	
	db.targetCollectionName.remove([query],[justOne]); remove documentData of targetCollection;
2.6	db.targetCollectionName.remove([query],[justOne:boolean,writeConcern:document]); remove documentData of targetCollection;
	db.targetCollectionName.remove({}); delete all documentData of targetCollection equel detele the collection;
	
	db.targetCollectionName.find([querystring]);
	db.targetCollectionName.findOne([querystring]); only get one document;
	db.targetCollectionName.find([querystring]).pretty(); show data by format;
	.pretty();

	mongodb:querystring:{;multi querystring use by ',';other $or
		= :{name:value}
		< :{name:{$lt:num}}
		<= :{name:{$lte:num}}
		> :{name:{$gt:num}}
		>=:{name:{$gte:num}}
		!=:{name:{$ne:num}};
		$or:[{querystring},{querystring2}...];
		{name:{$type:num}}; query by type of value;
	}
	sql:querystring:{;multi querystring use by 'AND';other OR
		= :where name =/<=/</>=/>/!= value
	}
		SQL:query sentence:Select * from targetTable where name > value;
		mongodb:query sentence:db.targetCollectionName.find({name : {$gt : value}});

	db.targetCollectionName.find().limit(num); get a certain numdata;
	db.targetCollectionName.find().limit(num).skip(num); get a certain numdata and skip num;
	db.targetCollectionName.find().sort(name:1 or-1); by name set num  to sort; 

	db.targetCollectionName.ensureIndex(name:1 or-1,name:1 or-1...);???index
		ensureIndex parameter:{
			background:foolean,

		}

	db.targetCollectionName.aggregate([options]);by $name get sum;[options]isArray but pipeline num gt 1;
		db.mycol.aggregate([{$group : {_id : "$by_user", varname : {$sum : 1}}}])
		$ aggregate:{
			$sum:"$name";get summary
			$avg:"$name";get average
			$min:"$name";get min;
			$max:"$name";get max;
			$push:"$name";push
			$addToSet:"$name"
			$first:"$name"
			$last:"$name"
		}
		SQL:select by_user, count(*) from targetCollectionName group by by_user
		{_id : 0 ,title : 1 };0 is not display,1 in contrary
		pipeline:{
			$group;document grouping;
			$project;Modify the structure of the input document
			$match;filter data in order to output the meet document;
			$limit;limit the num of getting the aggergate document;
			$skip;
			$unwind;
			$sort;sort document then export document;
			$geoNear;
		}

	replSet:
		mongod:
			mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0;
		mongo：
			look over：
				rs.initiate();start-up one replica;
				rs.conf();look up config of rs;
				rs.status();look up status of rs;
			rs.add(hostname:port);stem Dataserver adding to the replica
			rs.conf();
			db.isMaster();judging that if current mongo server is master;
	Shard and DataServer:
		shard Server:example：
			Shard Structure:
			Shard Server 1：27020
			Shard Server 2：27021
			Shard Server 3：27022
			Shard Server 4：27023
			Config Server ：27100
			Route Process：40000
			start shard Server:
				[root@100 /]# mkdir -p /www/mongoDB/shard/s0;establish directory and appointing path;
				[root@100 /]# /usr/local/mongoDB/bin/mongod --port 27020-23 --dbpath=/www/mongoDB/shard/s0 --logpath=/www/mongoDB/shard/log/s0.log --logappend --fork;set dbpath and logpath,finally start mongod;
			start Config Server:
				[root@100 /]# mkdir -p /www/mongoDB/shard/config
				[root@100 /]# /usr/local/mongoDB/bin/mongod --port 27100 --dbpath=/www/mongoDB/shard/config --logpath=/www/mongoDB/shard/log/config.log --logappend --fork
			start Route Server:
				[root@100 /]# /usr/local/mongoDB/bin/mongos --port 40000 --configdb localhost:27100 --fork --logpath=/www/mongoDB/shard/log/route.log --chunkSize 500
			Config sharding:
				[root@100 shard]# /usr/local/mongoDB/bin/mongo admin --port 40000;login mongos add shard
				mongos> db.runCommand({ addshard:"localhost:27020" });add shard 0-3;
				mongos> db.runCommand({ enablesharding:"test" });set-up shardData db;
				mongos> db.runCommand({ shardcollection: "test.log", key: { id:1,time:1}});
			Connect db:
				mongodb:'//localhost:Router.port';
	Mongodb Backup：
		mongodump:
			mongodump -h dbhost -d dbname -o dbdirectory;back data up to other directory;??? 
			mongorestore -h dbhost -d dbname --directoryperdb dbdirectory;

			mongodump --collection targetCollectionName --db databaseName;
			mongodump --host hostname --port 27017;
			mongodump --dbpath /data/db/ --out /data/backup/;

	MongoDB Watch:
		mongostat:bin run mongostat in order to looking over the status of mongod;
		mongotop:bin run mongotop track the thing used generous time;
			mongotop [time];time is the interval;

	MongonBD Coverage Index;speed more quickly;
	MongonBD Query Analysis:ensuring Index is valid;
	 	db.collectionName.find().explain();
	 	db.collectionName.find({gender:"M"},{user_name:1,_id:0}).hint({gender:1,user_name:1});hint() is force of appointing Index;
	
	MongoDB Atomic Operation: 	
		db.collectionName.findAndModify({query:{},update:{});
		Command:
			{$set:{field:value}}
			{$unset:{field:1}}
			{$inc:{field:value}}

			{$push:{fieldAArray:value}};fieldAArray must be Array;push to fieldAArray with one;
			{$pushAll:{fieldAArray:value_Array}};fieldAArray must be Array;push to fieldAArray with more value;
			{$pull:{fieldAArray:value}};fieldAArray must be Array;detele one of fieldAArray;
			{$addToSet:};add a value to Array but this value noexist;
			{$pop:{fieldAArray:1}};detele last element of Array;
			{$rename:{oldfieldname,newfieldname}};
			{$bit:{field:{and:5}}}

	MongoDB ObjectId:
		ObjectId structure:4+3+2+3;
		newObjectId=ObjectId();produce random Id;
		newObjectId=ObjectId('24character');appointing a Id;
		newObjectId.getTimestamp();
		newObjectId.str;get IdString;

	MongoDB Map Reduce:
		db.collection.mapReduce(
		  	function() {emit(key,value);},  //map 函数
		   	function(key,values) {return reduceFunction},   //reduce 函数
		   	{
			    out: collection,	save targetCollectionName;
			    query: document,
			    sort: document,
			    limit: number
		   	}
		)
	MongoDB RegEx:
		db.posts.find({post_text:{$regex:"w3cschool.cn",[$options:"$i"]}})
		db.collectionName.find({post_text:/w3cschool.cn/});

	MongoDB GridFS:apply to more 16M files;
		mongofiles.exe -d batabasename put song.mp3;using put Command in order to store files mp3;
	db.fs.chunks.find({files_id:ObjectId('534a811bf8b4aa4d33fdf94d')});

	MongoDB $inc javascript:

example：
	db.yankui.save({
		"title": "MongoDB 教程",
		"description": "MongoDB 是一个 Nosql 数据库",
		"by": "w3cschool",
		"url": "http://www.w3cschool.cn",
		"tags": [
			"mongodb",
			"database",
			"NoSQL"
		],
		"likes": 50
	})
	db.yankui.find({'likes':{$gt:50},'by':'name'}).pretty();all meet to success;
	db.yankui.find({$or:[{'likes':{$gt:50}},{'by':'name'}]}).pretty();one and more meet to success;
	db.yankui.find().sort({'name':1or-1}).pretty();one and more meet to success;
	db.yankui.ensureIndex({'name':1or1});
	db.yankui.aggregate([{
		$group: {
			_id: "$title",
			num_tutorial: {$avg: "$likes"}
		}
	}]);
	db.yankui.aggregate({
		$project: {
			title: 1,
			author: 1
		}
	});
	db.yankui.aggregate([
		{$match: {score: {$gt: 70,$lte: 90}}}, 
		{$group: {_id: null,count: {$sum: 1}}}
	]);





