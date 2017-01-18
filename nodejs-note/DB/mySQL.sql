command
	use dbname;
	SHOW DATABASES;
	SHOW TABLES;
	SHOW COLUMNS FROM onetable;
	SHOW INDEX FROM onetable;
	SHOW TABLE STATUS LIKE onetable;
	mysql -u root  -p;
	 	exit;
	mysql -u root  -p :{
		// create dbname;
		CREATE DATABASE dbname
		drop dbname;
	CREATE TABLE table_name (column_name column_type);
	}
	DROP TABLE table_name
	INSERT INTO tablename(datainit);
	SELECT column_name,column_name2 FROM tablename;
	WHERE name=value;//SELECT * from tablename WHERE author='Sanjay';
	UPDATE tablename SET field1=newvalue,field=newvalue[ WHERE condition];
	DELETE FROM table_name [WHERE];
	WHERE name LIKE VALUE AND[OR] condition2,LIKE is = ,in LIKE,%equal *;
	SELECT * FROM tablename ORDER BY field ASC|DESC
	SELECT * FROM tablename GROUP BY field [WITH ROLLUP];
	SELECT coalesce(a,b,c);使用 coalesce 来设置一个可以取代 NUll 的名称;
	SELECT a.feild  FROM tablename1 a INNER JOIN tablename2 b ON a.feild=b.feild;
		INNER JOIN/LEFT JOIN/RIGHT JOIN;
	REGEXP:{
		WHERE name REGEXP 'regstring';
	}
	ALTER:{
		ALTER TABLE tablename DROP feild;
		ALTER TABLE tablename ADD  field FIRST/AFTER feildname;
		ALTER TABLE tablename MOBIFY feildname class;
		ALTER TABLE tablename CHANGE targetfeildname changename class;
		ALTER TABLE tablename MODIFY feildname BIGINT NOT NULL DEFAULT 100;
		ALTER TABLE tablename RENAME TO tablename2;


	}
	CREATE INDEX indexname ON tablename(username(length));
	ALTER tablename ADD INDEX [indexname] ON (username(length)); 
	CREATE TABLE tablename (
		ID INT  NOT NULL ,
		username VARCHAR(16) NOT  NULL;
		INDEX [indexname] (username(length))
	);
	DROP INDEX [indexname] ON tablename;

	CREATE UNIQUE INDEX indexname ON tablename (username(length));
	ALTER tablename ADD UNIQUE [indexname] ON (username(length));
	ALTER INDEX:{
		ALTER TABLE tablename {
			ADD INDEX (feild),
			DROP INDEX (field),
		PRIMARY KEY{
			MODIFY feild class NOT NULL;
			ADD PRIMARY KEY (feild);
			DROP PRIMARY KEY;

		}}
	}
	SHOW INDEX FROM tablename;
	php:{
		$connection=mysql_connect(server,user,passwd,new_link,client_flag);
		$result=mysql_fetch_array($resultquery,'MYSQL_ASSOC')
		$result=mysql_fetch_assoc($resultquery);
		mysql_free_result($resultquery);

		$sql = 'CREATE DATABASE dbname';
		$sql = 'DROP DATABASE dbname';
		$sql = "CREATE TABLE tablename("
	       "tablename_id INT NOT NULL AUTO_INCREMENT, ".
	       "PRIMARY KEY ( tablename_id ))"; 
		$sql = 'DROP TABLE tablename';
		$sql = "INSERT INTO tblname ". "(title,author, submission_date) "."VALUES "."('$title','$author','$submission_date')";
		$sql = "SELECT column_name1,column_name2 FROM table_name WHERE column_name=value";
		$sql = "UPDATE tablename SET field1=newvalue,field=newvalue[ WHERE condition]"
		$sql = "DELETE FROM table_name [WHERE]"
			WHERE name LIKE VALUE AND[OR] condition2,LIKE is = ,in LIKE,%equal *;
		$sql = "SELECT * FROM tablename ORDER BY field ASC|DESC";
			SELECT * FROM tablename GROUP BY field  [WITH ROLLUP];
		bool mysql_query($sql, connection);
		bool mysql_select_db(db_name, connection);
	};
	


