---------- Basics & Setup ----------

1. A database name can't contain spaces, /, \, ., * <, >, ", |, ?, $, or : and normally are lowercase characters that are case sensitive

2. You start the server by typing this in the terminal or command prompt mongod or mongod.exe on Windows

3. You start the shell for interacting with the database by typing mongo or mongo.exe

4. You can run JavaScript code in the shell

a. function times2(num){
... return num * 2;
... }
> times2(5); // Returns 10

5. Show all databases with show dbs

6. Show the current database by typing db in the shell

7. Select a database with use test_1

8. Create a MongoDB document and insert it in the database

a. derekbanas = {"name" : "Derek Banas",
... "position" : "Programmer",
... "email" : "db@aol.com",
... "hiredate" : new Date()}

db.test_1.insert(derekbanas)

9. Show the document with db.test_1.find()

10. Update the database to allow a list of references

derekbanas.references = [ ]
db.test_1.update({"name" : "Derek Banas"}, derekbanas)

db.test_1.find() // Shows the updated document

11. Use remove on its own to delete all documents or with a parameter to delete just the one that matches

db.test_1.remove({"name" : "Derek Banas"})

db.test_1.find() // Shows no results

12. Data Types

a. null : {"name" : null}
b. boolean : {"over20" : true}
c. number : (64 bit float) : {"height" : 6.25}
	1. 4 byte Int : {"bigint" : 4294967295}
	2. 8 byte Long : {"bigLong" : 18446744073709551616}
d. string : {"address" : "123 Main St"}
e. An array can contain multiple data types : array : {"grades" : ["a", "b", "c", "d", "f"]}
f. date object : {"hiredate" : new Date()}
g. regular expression : {"streetregex" : /^[A-Za-z0-9\.\' \-]{5,30}$/}
h. embedded document : {"info" : {"name" : "Sue Smith"}}
i. object id (Unique for every document) : 12 Byte ID for documents

j. randomdata = {"name" : null, "over20" : true, "height" : 6.25,
"bigint" : 4294967295, "bigLong" : 18446744073709551616, 
"address" : "123 Main St", "grades" : ["a", "b", "c", "d", "f"],
"hiredate" : new Date(), "streetregex" : '/^[A-Za-z0-9\.\' \-]{5,30}$/',
"info" : {"name" : "Sue Smith"}}

k. db.test_1.insert(randomdata)

13. By typing help you'll receive a list of MongoDB commands

14. You can type commands without parentheses or parameters to see what the function does like -> db.test_1.find

15. exit closes the Mongo session

16. Type ulimit -n 2048 before running mongod to eliminate the error "soft rlimits too low. Number of files is 256" which will allocate more memory for the process.

17. You can execute JS scripts in MongoDB like this
a. Create file DefSelectDB.js
	i. var selectDB = function(port, dbName) {
	if(!port){
		port = 27017;
	}
	
	if(!dbName){
		dbName = "test_1";
	}
	
	db = connect("localhost:" + port + "/" + dbName);
	
	return db;
	}
	
b. Load the script in the Mongo shell : load('DefSelectDB.js')

c. Execute the function : selectDB()

d. Switch to another database like this : selectDB(27017,"test")

18. .mongorc.js is executed every time you run your shell command
a. On Windows it is at c:\Users\derekbanas\.mongorc.js

b. On Mac show all files by putting this in the terminal : defaults write com.apple.finder AppleShowAllFiles YES

c. Then open .mongorc.js from the finder on Mac

d. You can protect the DB, change the prompt and add an editor by adding these lines
var protectDB = function() { 
	db.dropDatabase = DB.prototype.dropDatabase = no; 
	DBCollection.prototype.drop = no; 
	DBCollection.prototype.dropIndex = no;
	print("Database Protected"); 
}; 

operationCount = 1;
prompt = function(){
	if (typeof db == 'undefined'){
		return 'nodb > ';
	}
	
	return db + " " + (operationCount++) + " > ";
	
};

EDITOR="vim"

e. Then execute protectDB() in the Mongo shell

f. This is the code on Windows

	i. var protectDB = function() { 
	db.dropDatabase = DB.prototype.dropDatabase = no; 
	DBCollection.prototype.drop = no; 
	DBCollection.prototype.dropIndex = no;
	print("Database Protected"); 
	}; 

	operationCount = 1;
	prompt = function(){
		if (typeof db == 'undefined'){
			return 'nodb > ';
		}
	
		return db + " " + (operationCount++) + " > ";
	
	};

	EDITOR="C:\\PROGRA~1\\SUBLIM~1\\sublime_text.exe" 
	
g. Now you can put this in the terminal : susysmith = {"name" : "Susy Smith"}
and then edit it with : edit susysmith