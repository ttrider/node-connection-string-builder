#node-connection-string-builder
==============================
SQL Connection String Builder for node.js. Modeled after .NET SqlConnectionStringBuilder class

Helps transition from .NET to node.js 

## Contributors

  * [Vladimir Yangurskiy](https://github.com/ttrider) 

# Installation

With [npm](http://npmjs.org) do:

    $ npm install node-connection-string-builder

# Examples

```javascript

	var ConnectionStringBuilder = require('node-connection-string-builder');
	var sc = new ConnectionStringBuilder('Data Source=.;User ID=foo;Password=bar;Initial Catalog=master;');
	console.log(sc.dataSource);
	console.log(sc.userID);
	console.log(sc.password);
	console.log(sc.initialCatalog);

	sc.initialCatalog = 'mydatabase';
	console.log(sc.connectionString);

```
Output:
	
	.
	foo
	bar
	master
	Data Source=.;User ID=foo;Password=bar;Initial Catalog=mydatabase;

# API Documentation

### constructor([connectionString])
	create new connection string builder, optionally populated with existing connection string properties

##Methods

### add(key, value)
	Add new property to connection string.
	
### remove(key)
	Remove property from connection string.

### clear()
	Remove all properties from connection string.

### getValue(key)
	Returns value of the property in connection string.

### setValue(key, value)
	Sets property in connection string to a particular value.
	
	If propery doesn't exists, it would be created.

### containsKey(key)
	Return true, if connection string contains property with specified key.
	 
##Properties

###connectionString
	
Gets or sets a string representation of the connection string properties.

###keys (Array, readonly)

Returns collection of property names from connection string.

##Helper properties

Helper properties allows you to manipulate the content of connection string.

###applicationIntent	

Declares the application workload type when connecting to a database in an SQL Server Availability Group. 

###applicationName	

Gets or sets the name of the application associated with the connection string.

###asynchronousProcessing	

Gets or sets a Boolean value that indicates whether asynchronous processing is allowed by the connection created by using this connection string.

###attachDBFilename	

Gets or sets a string that contains the name of the primary data file. This includes the full path name of an attachable database.

###connectTimeout	

Gets or sets the length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error.

###contextConnection	

Gets or sets a value that indicates whether a client/server or in-process connection to SQL Server should be made.

###currentLanguage	

Gets or sets the SQL Server Language record name.

###dataSource	

Gets or sets the name or network address of the instance of SQL Server to connect to.

###encrypt	

Gets or sets a Boolean value that indicates whether SQL Server uses SSL encryption for all data sent between the client and server if the server has a certificate installed.

###enlist

Gets or sets a Boolean value that indicates whether the SQL Server connection pooler automatically enlists the connection in the creation thread's current transaction context.

###failoverPartner	

Gets or sets the name or address of the partner server to connect to if the primary server is down.

###initialCatalog	

Gets or sets the name of the database associated with the connection.

###integratedSecurity	

Gets or sets a Boolean value that indicates whether User ID and Password are specified in the connection (when false) or whether the current Windows account credentials are used for authentication (when true).

###loadBalanceTimeout	

Gets or sets the minimum time, in seconds, for the connection to live in the connection pool before being destroyed.

###maxPoolSize

Gets or sets the maximum number of connections allowed in the connection pool for this specific connection string.

###minPoolSize

Gets or sets the minimum number of connections allowed in the connection pool for this specific connection string.

###multipleActiveResultSets	

When true, an application can maintain multiple active result sets (MARS). When false, an application must process or cancel all result sets from one batch before it can execute any other batch on that connection.For more information, see Multiple Active Result Sets (MARS).

###multiSubnetFailover	

If your application is connecting to an AlwaysOn availability group (AG) on different subnets, setting MultiSubnetFailover=true provides faster detection of and connection to the (currently) active server. For more information about SqlClient support for Always On Availability Groups, see SqlClient Support for High Availability, Disaster Recovery.

###networkLibrary	

Gets or sets a string that contains the name of the network library used to establish a connection to the SQL Server.

###packetSize

Gets or sets the size in bytes of the network packets used to communicate with an instance of SQL Server.

###password	

Gets or sets the password for the SQL Server account.

###pooling	

Gets or sets a Boolean value that indicates whether the connection will be pooled or explicitly opened every time that the connection is requested.

###replication	

Gets or sets a Boolean value that indicates whether replication is supported using the connection.

###transactionBinding	

Gets or sets a string value that indicates how the connection maintains its association with an enlisted System.Transactions transaction.

###trustServerCertificate	

Gets or sets a value that indicates whether the channel will be encrypted while bypassing walking the certificate chain to validate trust.

###typeSystemVersion	

Gets or sets a string value that indicates the type system the application expects.

###userID

Gets or sets the user ID to be used when connecting to SQL Server.

###userInstance	

Gets or sets a value that indicates whether to redirect the connection from the default SQL Server Express instance to a runtime-initiated instance running under the account of the caller.

###workstationID

Gets or sets the name of the workstation connecting to SQL Server.

# License

[MIT](./LICENSE)



 
	


