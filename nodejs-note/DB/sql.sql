mysql -u root  -p;-----connect sqlserver;
create database dbname;
	show databases;
	drop database dbname;
	use targerdbname;
create table yankui(--------column_name column_type
	id int(10) primary key auto,
	name varchar(10) not null primary key auto_increment,
	`dream` varchar(100),
	`date` date
);
 	show tables;
 	drop table tabname;
 	desc tabname;----look over table content;
 desc tabname:look over content
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(10)      | NO   | PRI | NULL    | auto_increment |
| name  | varchar(10)  | YES  |     | NULL    |                |
| dream | varchar(100) | YES  |     | NULL    |                |
| date  | date         | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+

	show create table yankui \G;------show detail information;\G”选项的含义是使得记录能够按照字段竖着排列
----------------------------------------------------------------
alter table:在大多数情况下，表结构的更改一般都使用alter table语句{
	alter table yankui modify [column] ids varchar(5) not null Default 100;
	alter table yankui add [column] datefeild date; 
	alter table yankui drop [column] datefeild; 
	alter table yankui change [column] oldname newname [type]
		change和modify都可以修改表的定义:change的优点是可以修改列名称，但是必须写old new;modify则不能;
		[first|after]:first在表的第一个，after是在this column的after;
	alter table yankui rename [to] newyankui; 
}
-------------------------------------------------------------------------------
+----+------+---------+------------+
| id | name | dream   | date       |
+----+------+---------+------------+
|  1 | yk   | yks     | 2017-01-01 |
|  2 | yk   | world   | 2017-01-01 |
|  4 | yks  | worlds  | 2017-02-01 |
|  5 | yksw | sworlds | 2017-02-01 |
|  7 | yk   | world   | 2017-01-01 |
+----+------+---------+------------+
DML语句:{DML操作是指对数据库中表记录的操作:insert/update/delete/select;all [where conditions]
	insert into yankui (ids,name) values(value,value)，....;一条或多条表记录;
	***理解：表结构和表记录;
	update yankui set ids=100,name=yk,... where ids=1;
		update yankui yk,tabname2 tb2 set yk.name=yks,tb2.name=yk.name,....where conditions;
			理解:yankui表和tabname2表联系同时操作;
	delete from yankui where conditions;----delete 一条表记录；
		delete yk,tab2 form yankui yk,tabname2 tab2 where yk.name=tab2.name and yk.ids=1;
			不加where条件将会把表的所有记录删除，所以操作时一定要小心;
	查询记录:{
		select * from yankui [where conditions];*代表表结构的feild
		select ids,name from yankui [where conditions];
		select distinct fieldname from yankui [where conditions];查询不重复的字符串; 
	};
	排序和限制:{order by;limit numoffset,numlength
		select * from yankui [where conditions] [order by fieldname,fieldname2 [desc|asc],...] [limit 1,3];
		####[desc|asc]是[降序|升序]
	};
	聚合:{max(field)/min()/count()/sum();
		select fieldname,count(fieldname|num) from yankui group by feildname[,....] with rollup having [where_conditions]
	****select-后的要显示和列出的字段或统计结果-from table-聚合方式-聚合参数字段 -  结果汇总    -对结果再次过滤;
		+------+-----------+---------+---------+
		| name | count(id) | max(id) | sum(id) |
		+------+-----------+---------+---------+
		| yk   |         3 |       7 |      10 |
		| yks  |         1 |       4 |       4 |
		| yksw |         1 |       5 |       5 |
		+------+-----------+---------+---------+
	};
	多表操作:{
		select yankui.name,yakui2.mygoal from yankui,yankui2 where yankui.name=yankui2.name;
			select * from yankui yk,yankui2,yk2 where yk.name=yk2.name;等价;
			select yk.name,yk2.mygoal from yankui yk,yankui2,yk2 where yk.name=yk2.name;等价;
		---------------------------------
				  yankui2
		+----+------+--------+----------+
		| id | name | dream  | mygoal   |
		+----+------+--------+----------+
		|  1 | yk   | world  | world    |
		|  2 | yks  | worlds | xingixng |
		+----+------+--------+----------+

	-------------------------------------------------------------------
	select * from yankui yk,yankui2,yk2 where yk.name=yk2.name;
					yankui      	*               yankui2
	+----+------+--------+------------+----+------+--------+----------+
	| id | name | dream  | date       | id | name | dream  | mygoal   |
	+----+------+--------+------------+----+------+--------+----------+
	|  1 | yk   | yks    | 2017-01-01 |  1 | yk   | world  | world    |
	|  2 | yk   | world  | 2017-01-01 |  1 | yk   | world  | world    |
	|  4 | yks  | worlds | 2017-02-01 |  2 | yks  | worlds | xingixng |
	|  7 | yk   | world  | 2017-01-01 |  1 | yk   | world  | world    |以多为主，不够补上；
	+----+------+--------+------------+----+------+--------+----------+
	select yk.name,yk2.mygoal from yankui yk,yankui2,yk2 where yk.name=yk2.name;
		 yankui - yankui2
		+------+----------+
		| name | mygoal   |
		+------+----------+
		| yk   | world    |
		| yk   | world    |
		| yks  | xingixng |
		| yk   | world    |
		+------+----------+


	}
}