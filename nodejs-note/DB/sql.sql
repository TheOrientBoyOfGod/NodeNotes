data:{
	http://book.phpchina.com/
}
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
	排序和限制:{order by;limit [numoffset],numlength
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
	select * from yankui yk,yankui2 yk2 where yk.name=yk2.name;
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
		yankui.*:yankui表的所以字段;
		 yankui - yankui2
		+------+----------+
		| name | mygoal   |
		+------+----------+
		| yk   | world    |
		| yk   | world    |
		| yks  | xingixng |
		| yk   | world    |
		+------+----------+
		select * from yankui left join yankui2 on yankui.name=yankui2.name;
			left join:产生表A的完全集，而B表中匹配的则有值，没有匹配的则以null值取代。left join<<-yankui<->yankui2 ->>get right join;
			right join:产生表B的完全集，而A表中匹配的则有值，没有匹配的则以null值取代。
			inner join:产生表AB的交集。

	};
	子查询:{在另外一个select语句的结果查询
		查询的关键字主要包括in、not in、=、!=、exists、not exists;
	}

	
}
mysql查询的五种子句:{
	 where(条件查询)、having（筛选）、group by（分组）、order by（排序）、limit（限制结果数）;
	 where{
	 	where feildname >= value ;>=,>,<,<=,=,!= (<>);
	 	where feildname between v1 and v2;
	 	where feildname in (v1,v2,v3...);where feildname in (select fieldname from table);
	 	where feildname=(v1 or v2); not(!) or(||) and(&&);
	 	like 查询:{=
	 		%:任意多个字符串;
	 		__:任意单个字符串;
	 		where feildname like value%;
	 		where feildname like value__;
	 	}
	 };
	 group by :{统计归类;
	   select fun(feildname||表达式||num)||feildname||表达式结果 [as 结果别名] from table group by feildname1;
	   		max(feildname||表达式);
	   		min(feildname||表达式); ->>>>表达式:feildname*feildname2......
	   		sum(feildname||表达式);
	   		count(feildname||表达式||num||*);
	   		avg(score);平均数;
	 };
	 select fieldname<value from table;------列出的是bool值：0,1;
	 having 与 where 的异同点:{
	 	where 针对表中的列发挥作用，"查询数据":'不可以使用别名'
        having 对查询结果中的列发挥作用，"筛选数据":'可以使用别名';
	 };
	 order by:{
	 	order by fieldname [desc||asc];
	 	order by rand();随机;
	 };
	 limit{
	 	limit [offset],length;
	 }
	"良好的理解模型："
        1、where后面的表达式，把表达式放在每一行中，看是否成立
        2、字段(列)，理解为变量，可以进行运算（算术运算和逻辑运算）  
        3、 取出结果可以理解成一张临时表
};
==================================================================================================
==================================================================================================
from型子查询:{
	"把内层的查询结果供外层再次查询"
	select name,avg(id) from yankui2 where name in(
		select name from (--------返回的就是表或数组值;
			select name,count(*) as cou from yankui group by name having cou > 2
		)as t
	)group by name;
};
exists型子查询:{
	"把外层查询结果拿到内层，看内层的查询是否成立"
	select name,id from yankui where exists (select * from yankui2 where yankui2.name=yankui.name);
			where 为真才输出前面的表记录；
};
union的用法:{
	"把两次或多次的查询结果合并起来,自动会去重复，如果不想去重复则要加all来声明"
	(select * from yankui union all select * from yankui2) as othernames;----get select table result;
	select * from yankui union all select * from yankui2-----输出的表结构要一样；
}
=======================================================================================================
DCL语句------------------------------------------------------------------------------------------------
=======================================================================================================
DCL语句:{主要是DBA用来管理系统中的"对象权限"时所使用;
	授权:grant select,insert,... on databasename.* to 'username'@'localhost' identified by 'password';
		 grant(授权)==>  操作  ==>  数据库的所有表  ==> 用户名===@=>主机  =====>密码;
		 exit;----退出root用户;
		 mysql -uusername -p;-----登录username用户;
	也可以在root下mysql数据库下user表来进行操作；
		revoke select on databasename.* to 'username'@'localhost';
			收回select权限;
}