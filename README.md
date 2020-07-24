# Ulink-Server-Sequelize

### 1. Clone 받는다.

### 2. npm i

### 3. npm start

- Database에 Schema가 존재해야 한다.
- ex) 만들고 싶은 Schema명이 ULink면 Database에 이름이 ULink인 Schema가 있어야한다.

# Config

```json
{
	"development": {
		"username": "root",
		"password": "wlffjt1akf",
		"database": "ULink",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": false
	},
	"test": {
		"username": "root",
		"password": "wlffjt1akf",
		"database": "ULink_test",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": false
	},
	"production": {
		"username": "root",
		"password": null,
		"database": "database_production",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": false
	}
}
```

- username : database 만들 때 지정한 name, ex) admin
- password : database 만들 때 지정한 password
- database : database 명(schema) ex) ULink
- host : url 주소 ex) local(127.0.0.1), aws rds(rds endpoint)

---

- development : 개발용(ULink)
- test : 테스트용 (ULink_test)
- production : 배포할 때 쓰는 schema
