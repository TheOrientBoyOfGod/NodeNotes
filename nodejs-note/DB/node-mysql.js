var mysql=require('mysql');
var mysqlconnection=mysql.createConnection(options);
	options:{
		host:value,
		port:value,
		socketPath:value,
		user:value,
		password:value,
		database:name,
		charset:value,
		...
	};
function:{
	var mysqlconnection=mysql.createConnection(url);create Object mysqlconnection;
		mysqlconnection.connect(function (error));mysqlconnection connect mysqlServer;
		mysqlconnection.end(function (error))/mysqlconnection.destroy(); close connect mysqlServer;
		mysqlconnection.pause(),mysqlconnection.resume()
	2'query':
		mysqlconnection.query(sql,[parameters],[function (error,result){
			result.insertId
		}]);
			'parameters':{
				***multipleStatements:boolean,出自安全考虑，防止多条语句的查询;
				***nestTables:boolean;是针对多张表中重复的key,使其冻结以两个对象的形式输出来;
				***nestTables:'_';这是重写了每一个key的name,this = "tab"+"_"+"name"
			}
		mysqlconnection.escape('string');the string is posting data or parameters;
			mysqlconnection.escapeId(identifier);
}
 		for example:{
 			mysqlconnection.query('INSERT INTO tablename SET ?',{id:1,name:'value'})
 			mysqlconnection.query('UPDATE tablename SET title=:name',{name:'value'});
 			mysqlconnection.query('SELECT * FROM tablename WHERE id=?',[userid]);
 			mysqlconnection.query('SELECT * FROM ?? WHERE id=?',['users',userid]);??is placeholder;

 		******'多张表查询的语句':{
 				SELECT tab1.identifier,tab2.identifier...FROM tab1 INNER JOIN　tab2 ON tab1.identifier1=tab2.identifier2;
 				优化:{针对重名的
 					**SELECT tab1.name,tab2.name name1...FROM tab1 INNER JOIN　tab2 ON tab1.name=tab2.name;
 					**使用options参数;

 				}
 			}
 		}
	2'处理大量数据->获取数据流':{
		var Object query=mysqlconnection.query(sql,[parameters]);
			Object query event:{
				query.on('field',function (field));read all field 
				query.on('result',function (result));
				query.on('end',function (end));receive all data;
				query.on('error',function (error));
			};
	};
	3'创建连接次':{提高性能
		var pool=mysql.createPool(options:{createConnection,boolean waitForConnections,connectionLimit,queueLimit}and options of createConnection);
			pool.getConnection(function (error,connection){
				connection.release();
				connection.destroy();
			});
			pool.end();
			

	}
 	
