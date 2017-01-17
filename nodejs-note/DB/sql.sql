mysql -u root  -p;-----connect sqlserver;
create database dbname;
	show databases;
	drop database dbname;
	use targerdbname;
create table yankui(--------column_name column_type
	ids int(10),
	name varchar(10),
	`target` decimal(10,1),
	`date` date
);
 	show tables;
 	drop table tabname;
 	desc tabname;----look over table content;
 desc tabname:look over content
-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| ids   | int(10)     | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
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
DML语句:{DML操作是指对数据库中表记录的操作:insert/update/delete/select
	insert into yankui (ids,name) values(value,value);
	***理解：
}