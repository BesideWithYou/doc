---
title: 数据库基础
---

## 数据模型

概念：由多张相互连接的二维表组成的数据库

特点：使用表存储数据，格式统一，方便维护，使用 SQL 语言操作，标准统一。

## 通用语法

单行注释： -- 注释内容 或 # 注释内容（MySQL 独有）

多行注释： /_ 注释内容 _/

## SQL 分类

DDL Data Definition Language 定义数据库对象

DML Data Manipulation Language 对数据进行增删改查

DQL Data Query Language 查询数据库中表的记录

DCL Data Control Language 创建/控制数据库访问权限

## DDL 定义数据库对象

### 库操作

#### 查询所有数据库

```
show databases;
```

#### 查询当前数据库

```
select database();
```

#### 创建数据库

```
create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];
```

#### 删除数据库

```
drop database [if exists] 数据库名;
```

#### 使用数据库

```
use 数据库名;
```

### 表操作

#### 查询当前库所有表

```
show tables;
```

#### 查询表结构

```
desc 表名;
```

#### 查询指定表的建表语句

```
show create table 表名;
```

#### 创建表

关键字可全小写，也可全大写

```sql
CREATE TABLE 表名(
  字段1 字段1类型 [COMMENT 字段1注释],
  字段2 字段2类型 [COMMENT 字段2注释],
  字段3 字段3类型 [COMMENT 字段3注释],
  ...
)[COMMENT 表注释];
```

### 数据类型

#### 数值类型

分为有符号 SIGNED 和 无符号 UNSIGNED，

描述年龄时：age TINYINT UNSIGNED

描述分数时： score double(4, 1)

| 类型      | 大小    |
| --------- | ------- |
| TINYINT   | 1 byte  |
| SMALLINT  | 2 bytes |
| MEDIUMINT | 3 bytes |
| INT       | 4 bytes |
| BIGINT    | 8 bytes |
| FLOAT     | 4 bytes |
| DOUBLE    | 8 bytes |
| DECIMAL   |         |

#### 字符串类型

char 和 varchar 最常用

| 类型       | 大小                       |
| ---------- | -------------------------- |
| CHAR       | 0-255 bytes 定长字符串     |
| VARCHAR    | 0-65535 bytes 变长字符串   |
| TINYBLOB   | 0-255 bytes 二进制         |
| TINYTEXT   | 0-255 bytes 短文本字符串   |
| BLOB       | 0-65535 bytes 二进制长文本 |
| TEXT       | 0-65535 bytes              |
| MEDUMBLOB  | 0-16777215 bytes           |
| MEDIUMTEXT | 0-16777215 bytes           |
| LONGBLOB   | 0-4294967295 bytes         |
| LONGTEXT   | 0-4294967295 bytes         |

#### 日期类型

| 类型      | 大小 | 范围                                         | 格式                |
| --------- | ---- | -------------------------------------------- | ------------------- |
| DATE      | 3    | 1000-01-01 至 9999-12-31                     | YYYY-MM-DD          |
| TIME      | 3    | -838:59:59 至 838:59:59                      | HH:MM:SS            |
| YEAR      | 1    | 1901 至 2155                                 | YYYY                |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31 23：59：59 | YYYY-MM-DD HH:MM:SS |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07   | YYYY-MM-DD HH:MM:SS |

#### 案例-创建员工表

1.编号（纯数字）

2.员工工号（字符串，不超过 10 位）

3.员工名字（字符串，不超过 10 位）

4.性别（男/女）

5.年龄

6.身份证号

7.入职时间（年月日）

```sql
create table employer (
  id int comment '编号',
  workno varchar(10) comment '工号',
  name varchar(10) comment '姓名',
  gender char(1) comment '性别',
  age tinyint unsigned comment '年龄',
  idcard char(18) comment '身份证号',
  entry_date date comment '入职时间'
) comment '员工表';
```

### 修改表

```
ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];
```

### 案例-为员工表增加一个新字段 nickname

类型为 varchar(20)

```sql
alter table employer add nickname varchar(20) comment '昵称';
```

### 修改数据类型

```sq
ALTER TABLE 表名 M0DIFY 字段名 新数据类型(长度);
```

### 修改字段名和字段类型

```sql
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];
```

### 删除字段

```sql
ALTER TABLE 表名 DROP 字段名;
```

### 修改表名

```sql
ALTER TABLE 表名 RENAME TO 新表名;
```

### 删除表

```sql
DROP TABLE [IF EXISTS] 表名;
```

### 删除指定表，并重新创建

```sql
TRUNCATE TABLE 表名;
```

## DML 数据增删改操作

添加 INSERT

修改 UPDATE

删除 DELETE

### 添加数据

给指定字段添加

```sql
INSERT INTO 表名(字段1,字段2,字段3 ...)  VALUES (值1,值2,值3 ...);
```

给所有字段添加

```sql
INSERT INTO 表名 VALUES(值1, 值2, ...);
```

批量添加数据

```sql
INSERT INTO 表名 (字段1,字段2,...) VALUES (值1,值2,...),(值1,值2,...),(值1,值2,...);
```

```sql
INSERT INTO 表名 VALUES (值1,值2,...),(值1,值2,...),(值1,值2,...);
```

### 修改数据

如果不带 where 条件，则整张表对应字段的数据都会更新

```sql
UPDATE 表名 SET 字段名1=值1,字段名2=值2,...[WHERE 条件];
```

如

```sql
update employer set name = 'xingxing' where id = 1;
```

### 删除数据

```sql
DELETE FROM 表名 [WHERE 条件];
```

删除所有数据时不需要带 where 条件，如删除所有员工

```sql
delete from employer;
```

## DQL 数据查询

### 编写顺序和执行顺序

```sql
SELECT   		（4）
	字段列表
FROM   			（1）
	表名列表
WHERE			（2）
	条件列表
GROUP BY		（3）
	分组字段列表
HAVING
	分组后条件列表
ORDER BY		（5）
	排序字段列表
LIMIT			（6）
	分页参数
```

### 基本查询

1.查询多个字段

```sql
SELECT 字段1,字段2,字段3... FROM 表名;
```

```sql
SELECT * FROM 表名;
```

2.设置别名

```SQL
SELECT 字段1 [AS 别名1], 字段2 [AS 别名2] ... FROM 表名;
```

3.数据去重

```SQL
SELECT DISTINCT 字段列表 FROM 表名;
```

### 条件查询

条件列表

| 比较运算符          | 功能                                      |
| ------------------- | ----------------------------------------- |
| >                   |                                           |
| >=                  |                                           |
| <=                  |                                           |
| =                   |                                           |
| <> 或 !=            | 不等于                                    |
| BETWEEN ... AND ... | 范围查询 [最小值,最大值]                  |
| IN(...)             | 在 in 之后的列表中的值，多选一            |
| LIKE 占位符         | 模糊匹配(\_匹配单个字符, %匹配任意个字符) |
| IS NULL             | 是 NULL 的话                              |
| AND 或 &&           | 与                                        |
| OR 或 \|\|          | 或                                        |
| NOT 或 !            | 非                                        |

#### 案例

查询名字为两个字的员工

```sql
select * from employer where name like '__';
```

查询身份证最后一位是 X 的员工信息

```sql
select * from employer where idcard like '%X';
```

### 聚合函数

分组查询一般是和聚合函数配合使用的

常见聚合函数

| 函数  | 功能     |
| ----- | -------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |

语法

```sql
SELECT 聚合函数(字段列表) FROM 表名;
```

注意

**null 值不参与统计**

#### 案例

统计员工数量

```sql
select count(*) from employer;
select count(idcard) from employer;
```

统计员工平均年龄

```sql
select avg(age) from employer;
```

统计杭州员工的年龄之和

```sql
select sum(age) from emp where workaddress = '杭州';
```

### 分组查询

如果不满足 WHERE 条件，则后续的 GROUP BY 不参与查询

```SQL
SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件];
```

WHERE 和 HAVING 的区别

执行时机：where 是分组之前过滤，不满足 where 条件不参与分组；而 having 是分组之后对结果再进行过滤。

判断条件：where 不能对聚合函数进行判断， having 可以。

执行顺序：

where > 聚合函数 > having

#### 案例

根据性别分组，统计男员工和女员工数量

```sql
select gender, count(*) from employer group by gender
```

查询年龄小于 45 的员工，并根据工作地址分组，获取员工数量大于等于 3 的工作地址

```sql
select workaddress, count(*) as address_count from employer where age < 45 group by workaddress having address_count >= 3;
```

### 排序查询

```sql
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2, 排序方式2 ...;
```

排序方式：

ASC(ascending order)：升序（默认)

DESC(descending order)：降序

#### 案例

根据年龄对公司员工进行升序排序，年龄相同，再按照入职时间进行降序排序。

```sql
select * from employer order by age asc, entrydate desc;
```

### 分页查询

```sql
SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数;
```

注意：

索引从 0 开始，索引 = （查询页码 - 1） \* 每页显示记录数

分页查询在不同数据库会有不同实现， MySQL 是 LIMIT

如果只查第一页，可以省略起始索引字段

多个查询条件时，LIMIT 写在最后面

#### 案例

查询第 2 页员工数据，每页展示 10 条

索引从 0 开始，索引 = （查询页码 - 1） \* 每页显示记录数

```sql
select * from employer limit 10, 10;
```

## DCL 管理用户

### 查询用户

```sql
USE mysql;
SELECT * FROM user;
```

### 创建用户

```sql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```

### 修改用户密码

```SQL
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';
```

### 删除用户

```sql
DROP USER '用户名'@'主机名';
```

### 案例

#### 创建用户，本地可以访问

```sql
create user 'dachui'@'localhost' identified by '123456';
```

#### 创建用户，任意主机可以访问

使用 % 进行通配符匹配，表示所有主机

```sql
create user 'dachui'@'%' identified by '123456';
```

### 权限控制

| 权限                | 说明               |
| ------------------- | ------------------ |
| ALL, ALL PRIVILEGES | 所有权限           |
| SELECT              | 查询数据           |
| INSERT              | 插入数据           |
| UPDATE              | 修改数据           |
| DELETE              | 删除数据           |
| ALTER               | 修改表             |
| DROP                | 删除数据库/表/视图 |
| CREATE              | 创建数据库/表      |

#### 查询权限

```sql
SHOW GRANTS FOR '用户名'@'主机名';
```

#### 授予权限

```sql
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';
```

所有数据库所有表授权时，数据库名.表名可以写成 \*.\*

#### 撤销权限

```SQL
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';
```

#### 案例

给予 dachui 这个用户 test 数据库下面所有表的访问权限

```sql
grant all on test.* to 'dachui'@'%';
```

## 函数

### 字符串函数

| 函数                       | 说明                                                  |
| -------------------------- | ----------------------------------------------------- |
| concat(s1, s2, ...sn)      | 字符串拼接                                            |
| lower(str)                 | 转小写                                                |
| upper(str)                 | 转大写                                                |
| lpad(str, n, pad)          | 左填充 pad 字符 直到 n 个长度                         |
| rpad(str, n, pad)          | 右填充 pad 字符 直到 n 个长度                         |
| trim(str)                  | 去掉头尾空格                                          |
| substring(str, start, len) | 返回从字符串 str 从 start 位置起的 len 个长度的字符串 |

### 数值函数

| 函数        | 说明                                   |
| ----------- | -------------------------------------- |
| ceil(x)     | 向上取整                               |
| floor(x)    | 向下取整                               |
| mod(x, y)   | 返回 x/y 的模                          |
| rand()      | 返回 0 ~ 1 的随机数                    |
| round(x, y) | 求参数 x 的四舍五入的值，保留 y 位小数 |

### 日期函数

| 函数                               | 说明                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| curdate()                          | 返回当前日期                                                                                                                   |
| curtime()                          | 返回当前时间                                                                                                                   |
| now()                              | 返回当前日期和时间                                                                                                             |
| year(date)                         | 获取指定 date 的年份                                                                                                           |
| month(date)                        | 获取指定 date 的月份                                                                                                           |
| day(date)                          | 获取指定 date 的日期                                                                                                           |
| date_add(date, INTERVAL expr type) | 返回一个日期/时间值加上一个时间间隔 expr 后的时间值，如给返回现在加上 70 年后的时间 `select date_add(now(), INTERVAL 70 YEAR)` |
| datediff(date1, date2)             | 返回起始时间 date1 和结束时间 date2 之间的天数，date1 - date2                                                                  |

### 流程函数

| 函数                                                       | 说明                                                            |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| if(value, t, f)                                            | 如果 value 为 true，返回 t，否则返回 f                          |
| ifnull(value1, value2)                                     | value1 不为空，返回 value1,否则返回 value2                      |
| case when [val1] then [res1] ... else [default] end        | 如果 val1 为 true，返回 res1 ,...否则返回 default 默认值        |
| case [expr] when [val1] then [res1] ... else [default] end | 如果 expr 的值等于 val1 ,返回 res1, ... 否则返回 default 默认值 |

#### 案例

查询员工表的员工姓名和工作地址，如果北上广深就返回一线，其它的就返回其它城市

```sql
select
	name,
	(case workaddress when '北京' then '一线城市' when '上海' then '一线城市' when '广州' then '一线城市' when '深圳' then '一线城市' else '其它城市' end) as '工作地址'
from employer;
```

统计班级各个学院的成绩，大于等于 85 展示优秀，大于等于 60 展示及格，否则展示不及格

```sql
select
	id,
	name,
	(case when math >= 85 then '优秀' when math >= 60 then '及格' else '不及格' end) as '数学成绩',
	(case when english >= 85 then '优秀' when english >= 60 then '及格' else '不及格' end) as '英语成绩',
	(case when chinese >= 85 then '优秀' when chinese >= 60 then '及格' else '不及格' end) as '语文成绩'
from score;
```

## 约束

### 概念

作用域表中字段的规则，用于限制存储在表中的数据，用来保证数据库中数据的正确、有效和完整

### 约束的分类

| 约束                        | 关键字      | 描述                                                 |
| --------------------------- | ----------- | ---------------------------------------------------- |
| 非空                        | NOT NULL    | 限制数据不能为空                                     |
| 唯一约束                    | UNIQUE      | 保证该字段的所有数据都是唯一不重复的                 |
| 主键约束                    | PRIMARY KEY | 主键是一行数据的唯一标识，要求非空且唯一             |
| 默认约束                    | DEFAULT     | 保存数据时，未指定的适合就采用默认值                 |
| 检查约束(8.0.16 版本后支持) | CHECK       | 保证字段值满足某一个条件                             |
| 外键约束                    | FOREIGN KEY | 用来让两张表的数据建立连接，保证数据的一致性和完整性 |

#### 案例

创建一个用户表，用上一些约束条件

```sql
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
	name VARCHAR(10) NOT NULL UNIQUE COMMENT '姓名',
	age INT CHECK (age > 0 && age <= 120 ) COMMENT '年龄',
	status CHAR(1) DEFAULT '1' COMMENT '状态',
	gender CHAR(1) COMMENT '性别'
) COMMENT '用户表';
```

### 外键约束

#### 添加外键

```sql
CREATE TABLE 表名 (
	...
    [CONSTRAINT] [外键名称] FOREIGN KEY (外键字段名) REFERENCES 主表 (主表列名);
);
```

如果已存在表想要添加外键约束

```sql
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名) REFERENCES 主表 (主表列名);
```

#### 删除外键

```sql
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```

#### 外键删除更新行为

| 行为          | 说明                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| NO ACTION     | 当在父表中删除/更新记录时，先检查该记录是否有外键，如果有则不允许删除，和(RESTRICT 一样)             |
| RESTRICT      | 当在父表中删除/更新记录时，先检查该记录是否有外键，如果有则不允许删除，和(NO ACTION 一样)            |
| CASCADE(级联) | 当在父表中删除/更新记录时，先检查该记录是否有外键，如果有则同时删除/更新外键在子表中的记录           |
| SET NULL      | 当在父表中删除记录时，先检查该记录是否有外键，如果有则设置子表中该外键值为 null(要求外键允许为 null) |
| SET DEFAULT   | 父表有变更时，子表将外键列设置成一个默认的值(innodb 不支持)                                          |

让更新操作变成 CASCADE，删除操作也变成 CASCADE

```sql
ALTER TABLE 表名 CONSTRAINT 外键名称 FOREIGN KEY (外键字段) REFERENCES 主表名(主表字段名) ON UPDATE CASCADE ON DELETE CASCADE;
```

## 多表(联表)查询

### 多表关系

- 一对多（多对一）
- 多对多
- 一对一

### 多对多

#### 案例：学生和课程的关西

一个学生可以选多门课，一门课也可以让多个学生选择

实现：建立第三张中间表，中间表至少包含两个外键，分别关联学生表和课程表

学生表

```sql
create table student(
    id int auto_increment primary key comment '主键ID',
    name varchar(10) comment '姓名',
    no varchar(10) comment '学号'
) comment '学生表';
```

课程表

```sql
create table course(
    id int autp_increment primary key comment '主键ID',
    name varchar(10) comment '课程名称'
) comment '课程表';
```

课程学生关联中间表

```sql
create table student_course(
	id int auto_increment comment '主键' primary key
    studentid int not null comment '学生ID',
    courseid int not null comment '课程ID',
    constraint fk_courseid foreign key (courseid) references course (id),
    constraint fk_studentid foreign key (studentid) references student (id),

) comment '学生课程中间表';
```

### 一对一

用户和用户详情的关系

一对一，用于单表拆分，基础字段放在一张表，其它详情字段放到另一张表，以提高操作效率。

实现：任意一方加入外键来关联另一方的主键，并且设置外键为唯一(UNIQUE)

### 概述

从多张表中查询数据

笛卡尔积：两个集合的所有组合情况（多表查询时，需要消除无效的笛卡尔积）

### 分类

#### 连接查询：

- 内连接：相当于查询 A、B 交集部分的数据
- 外连接：
  - 左外连接：查询左表所有数据以及两张表的交集部分数据
  - 右外连接：查询右表所有数据，以及两张表交集部分数据
- 自连接：当前表和自身的连接查询，自连接必须使用表别名

### 内连接

查询两张表交集部分

#### 隐式内连接

```SQL
SELECT 字段列表 FROM 表1,表2 WHERE 条件 ...;
```

#### 显式内连接

```SQL
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 连接条件;
```

#### 案例

查询每一个员工姓名，及关联部门的名称

内连接：

```sQL
select emp.name, dept.name from emp, dept where emp.dept_id = dept.id;
```

起个别名来查询

```sql
select e.name, d.name from emp e, dept d where e.dept_id = d.id;
```

显式外连接：

```sql
select e.name, d.name from emp e inner join dept d on e.dept_id = d.id;
```

### 外连接

#### 左外连接

```sql
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件 ...;
```

#### 右外连接

```sql
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件 ...;
```

#### 案例

左外连接：查询员工表所有数据和对应部门信息

```sql
select e.*, d.name from emp e left join dept d on e.dept_id = d.id;
```

右外连接：查询部门表所有数据和对应员工信息

```sql
select e.*, d.* from emp e right join dept d on e.dept_id = d.id;
```

用左外连接多一些，习惯性把主表放左边，因为右外连接也可以通过改一下顺序变成左外连接。

#### 自连接

自己连接自己，可以内连接查询，也可以外连接查询

```sql
SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件 ...;
```

#### 案例

比如员工表里面找自己关联的领导，通过领导 ID 关联到员工 ID，因为领导 ID 用的也是员工 ID

1.查询员工及其所属领导名字

```sql
select a.name, b.name from emp a, emp b where a.managerid = b.id;
```

2.查询员工和所属领导名字，如果员工没有领导，也要查询出来，所以要用左外连接

```sql
select a.name '员工', b.name '领导' from emp a left join emp b on a.managerid = b.id;
```

### 联合查询

union 把多个查询的结果合并起来，形成一个新的查询结果集。

不带 ALL 关键字时可以将查询后的结果去重

```sql
SELECT 字段列表 FROM 表A ...
UNION [ALL]
SELECT 字段列表 FROM 表B ...;
```

### 子查询

#### 概念

SQL 语句中嵌套 SELECT 语句，称为嵌套查询，又称子查询

```sql
SELECT * FROM t1 WHERE column1 = (SELECT column1 FROM t2);
```

| 类型       | 说明                 |
| ---------- | -------------------- |
| 标量子查询 | 子查询结果为单个值   |
| 列子查询   | 子查询结果为一列     |
| 行子查询   | 子查询结果为一行     |
| 表子查询   | 子查询结果为多行多列 |

#### 标量子查询

子查询返回的结果只有一个，类型可能是（数字、字符串、日期等）

常用操作符： = <> > >= < <=

##### 案例：

查询销售部的所有员工信息

拆解为两个语句：

a: 查询销售部部门 ID

```sql
select id from dept where name = '销售部';
```

b:根据销售部部门 ID，查询员工信息

```sql
select * from emp where dept_id = xxx;
```

合并起来就是：

```sql
select * from emp where dept_id = (select id from dept where name = '销售部');
```

#### 列子查询

常用操作符: IN 、NOT IN 、 ANY、SOME、ALL

| 操作符 | 说明                                      |
| ------ | ----------------------------------------- |
| IN     | 在指定的集合范围之内，多选一              |
| NOT IN | 不在指定的集合范围之内                    |
| ANY    | 子查询返回列表中，有任意一个满足即可      |
| SOME   | 和 ANY 等同，使用 SOME 的地方都可以用 ANY |
| ALL    | 子查询返回列表的所有值都必须满足          |

##### 案例：

查询 销售部 和 市场部 的所有员工信息

```sql
select * from emp where dept_in (select id from dept where name = '销售部' or name = '市场部';);
```

查询比财务部所有人工资都高的员工信息

a.查询所有财务部的人员工资

```sql
select id from dept where name = '财务部';
```

```sql
select salary from emp where dept_id = (select id from dept where name = '财务部');
```

b.比财务部所有人工资都高的员工信息

```sql
select * from emp where salary > all ( select salary from emp where dept_id = (select id from dept where name = '财务部') );
```

#### 行子查询

返回结果是一行数据

常用操作符： =、<>、IN、NOT IN

##### 案例:

查询与张无忌的薪资及直属领导相同的员工信息

```sql
select salary, managerid from emp where name = '张无忌';
```

```sql
select * from emp where (sarary, managerid) = (select salary, managerid from emp where name = '张无忌';);
```

#### 表子查询

返回结果是多行多列，常用操作符：IN

##### 案例:

1.查询和 鹿杖客 宋远桥 职位和薪资相同的员工信息

a.先查询 鹿杖客 宋远桥 的 职位和薪资

```sql
select job, salary from emp where name = '鹿杖客' or name = '宋远桥';
```

b.查询和 鹿杖客 宋远桥 职位和薪资相同的员工信息

```sql
select * from emp where (job, salary) in (select job, salary from emp where name = '鹿杖客' or name = '宋远桥';)
```

2.查询入职时间是 2006-10-1 之后的员工信息，及其部门信息

a.先查询入职时间是 2006-10-1 之后的员工信息

```sql
select * from emp where entrydate > '2006-10-1';
```

然后把这里的结果作为一张临时表，去和部门表做联表查询

```sql
select e.*, d.* from (select * from emp where entrydate > '2006-10-1') e left join dept d on e.dept_id = d.id;
```

#### 多表查询案例

##### 1.查询员工姓名、年龄、职位、部门(隐式内连接)

```sql
select e.name, e.age, e.job, d.name from emp e, dept d where e.dept_id = d.id;
```

##### 2.查询年龄小于 30 岁的员工姓名、年龄、职位、部门信息（显示内连接）

```sql
select e.name, e.age, e.job, d.name from emp e inner join dept d on e.dept_id = d.id where e.age < 30;
```

##### 3.查询拥有员工的部门 ID、部门名称

有一些部门下面没有员工的，不需要返回

```sql
select distinct d.id, d.name from emp e, dept d where e.dept_id = d.id;
```

##### 4.查询所有年龄大于 40 的员工，及归属的部门名称，如果员工没分配部门也要展示

```sql
select e.*, d.name from emp e left join dept d on e.dept_id = d.id where age > 40;
```

##### 5.查询所有员工的工资等级

表 emp 、salarygrade ，这两张表没有外键关联

salarygrade 表中根据最低薪资和最高薪资的区间来划分等级

```sql
select e.name, s.grade from emp e , salarygrade s where e.salary between s.lowestsarary and s.highestsalary;
```

##### 6.查询研发部所有员工信息及工资等级

三张表：员工表、部门表、工资等级表

```sql
select e.*, s.grade from emp e, dept d, salarygrade s where e.dept_id = d.id and (e.salary between s.lowestsarary and s.highestsalary) and d.name = '研发部';
```

##### 7.查询低于本部门平均工资的员工信息

a. 查询指定部门的平均薪资

```sql
select avg(e1.salary) from emp e1 where e1.dept_id = 1;
```

b.查询低于本部门平均工资的员工信息（自连接）

```sql
select * from emp e2 where e2.salary < (select avg(e1.salary) from emp e1 where e1.dept_id = e2.dept_id)
```

再把当前部门的平均薪资也返回一下

```sql
select *, (select avg(e1.salary) from emp e1 where e1.dept_id = e2.dept_id) '平均薪资' from emp e2 where e2.salary < (select avg(e1.salary) from emp e1 where e1.dept_id = e2.dept_id)
```

##### 8. 查询所有部门信息，并统计部门的员工人数

```sql
select d.id, d.name, (select count(*) from emp e where e.dept_id = d.id) '人数' from dept d;
```

## 事务

事务是一组操作的集合，是一个不可分割的工作单位，事务会把所有操作作为一个整体向系统提交或撤销操作请求，这些操作要么同时成功要么同时失败。

比如张三给李四转账 1000：

- 查询张三账户余额
- 张三余额-1000
- 李四余额+1000

只要有一步抛异常，就会发生回滚

### 事务操作

#### 查看/设置事务提交方式

```sql
SELECT @@autocommit;
SET @@autocommit = 0;
```

#### 开启事务

```sql
START TRANSACTION 或 BIGIN;
```

#### 提交事务

```SQL
COMMIT;
```

#### 回滚事务

```SQL
ROLLBACK;
```

### 事务四大特性

#### 原子性

事务是不可分割的最小操作单元，要么全部成功、要么全部失败

#### 一致性

事务完成时，必须使所有的数据都保持一致的状态

#### 隔离性

数据库提供的隔离机制，保证事务在不受外部并发操作影响的独立环境运行

#### 持久性

事务一旦提交或回滚，它对数据库中的数据改变是永久的

### 并发事务问题

一个线程里的事务操作受到了另一个线程的影响

| 问题       | 描述                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 脏读       | 一个事务读到另一个事务还没有提交的数据                                                                 |
| 不可重复读 | 一个事务先后读取同一条记录，但两次读取的数据不同                                                       |
| 幻读       | 一个事务按照条件查询数据时，没有对应的数据行，但在插入数据时，又发现这行数据已经存在，好像出现了“幻影” |

### 事务隔离级别

| 隔离级别              | 脏读 | 不可重复读 | 幻读 |
| --------------------- | ---- | ---------- | ---- |
| Read uncommitted      | √    | √          | √    |
| Read committed        | ×    | √          | √    |
| Repeatable Read(默认) | ×    | ×          | √    |
| Serializable(串行化)  | ×    | ×          | ×    |

#### 查看事务隔离级别

```sql
SELECT @@TRANSACTION_ISOLATION
```

#### 设置事务隔离级别

SESSION 只针对当前客户端窗口有效， GLOBAL 针对所有客户端窗口有效

```sql
SET [SESSION | GLOBAL] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE }
```
