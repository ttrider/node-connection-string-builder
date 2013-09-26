function assert(expected, actual) {
    
    if (typeof (expected) == 'string') {
        expected = expected.toLowerCase();
    }
    if (typeof (actual) == 'string') {
        actual = actual.toLowerCase();
    }

    if (expected != actual) {
        throw 'expected:\r\n' + expected + '\r\nactual:\r\n' + actual;
    }
}

var ConnectionStringBuilder = require('../index.js');


// build new simple one from scratch 
var sc01 = new ConnectionStringBuilder();
sc01.add('server', '.');
sc01.add('user', 'foo');
sc01.add('pwd', 'bar');
sc01.add('Initial Catalog', 'master');

assert('Data Source=.;User ID=foo;Password=bar;Initial Catalog=master;', sc01.connectionString);


var ConnectionStringBuilder = require('node-connection-string-builder');
var sc = new ConnectionStringBuilder('Data Source=.;User ID=foo;Password=bar;Initial Catalog=master;');
console.log(sc.dataSource);
console.log(sc.userID);
console.log(sc.password);
console.log(sc.initialCatalog);


sc01.remove('pwd');
assert('Data Source=.;User ID=foo;Initial Catalog=master;', sc01.connectionString);

sc01.clear();
assert('', sc01.connectionString);


// parse complete string and re-create it
var canonicalFull = "Data Source=DataSource;Failover Partner=FailoverPartner;AttachDbFilename=AttachDB;Initial Catalog=InitialCatalog;Integrated Security=True;Persist Security Info=True;User ID=userid;Password=pwd;Enlist=True;Pooling=True;Min Pool Size=5;Max Pool Size=10;Asynchronous Processing=True;MultipleActiveResultSets=True;Replication=True;Connect Timeout=400;Encrypt=True;TrustServerCertificate=True;Load Balance Timeout=500;Network Library=dbmssocn;Packet Size=512;Type System Version=TypeSystemVersion;Application Name=ApplicationName;Current Language=CurrentLanguage;Workstation ID=WorkstationID;User Instance=True;Context Connection=True;Transaction Binding=TransactionBinding;ApplicationIntent=ReadOnly;MultiSubnetFailover=True;";
var sc02 = new ConnectionStringBuilder(canonicalFull);
assert(canonicalFull, sc02.connectionString);

var updated = "Data Source=DataSourceA;Failover Partner=FailoverPartnerA;AttachDbFilename=AttachDBA;Initial Catalog=InitialCatalogA;Integrated Security=false;Persist Security Info=false;User ID=useridA;Password=pwdA;Enlist=false;Pooling=false;Min Pool Size=6;Max Pool Size=11;Asynchronous Processing=false;MultipleActiveResultSets=false;Replication=false;Connect Timeout=401;Encrypt=false;TrustServerCertificate=false;Load Balance Timeout=501;Network Library=dbmssocnA;Packet Size=513;Type System Version=TypeSystemVersionA;Application Name=ApplicationNameA;Current Language=CurrentLanguageA;Workstation ID=WorkstationIDA;User Instance=false;Context Connection=false;Transaction Binding=TransactionBindingA;ApplicationIntent=ReadOnlyA;MultiSubnetFailover=false;";
var sc03 = new ConnectionStringBuilder(canonicalFull);
sc03.applicationIntent+='A';
sc03.applicationName+='A';
sc03.asynchronousProcessing = !sc03.asynchronousProcessing;
sc03.attachDBFilename+='A';
sc03.connectTimeout++;
sc03.contextConnection = !sc03.contextConnection;
sc03.currentLanguage+='A';
sc03.dataSource+='A';
sc03.encrypt = !sc03.encrypt;
sc03.enlist = !sc03.enlist;
sc03.failoverPartner+='A';
sc03.initialCatalog+='A';
sc03.integratedSecurity = !sc03.integratedSecurity;
sc03.loadBalanceTimeout++;
sc03.maxPoolSize++;
sc03.minPoolSize++;
sc03.multipleActiveResultSets = !sc03.multipleActiveResultSets;
sc03.multiSubnetFailover = !sc03.multiSubnetFailover;
sc03.networkLibrary+='A';
sc03.packetSize++;
sc03.password+='A';
sc03.persistSecurityInfo = !sc03.persistSecurityInfo;
sc03.pooling = !sc03.pooling;
sc03.replication = !sc03.replication;
sc03.transactionBinding+='A';
sc03.trustServerCertificate = !sc03.trustServerCertificate;
sc03.typeSystemVersion+='A';
sc03.userID+='A';
sc03.userInstance = !sc03.userInstance;
sc03.workstationID+='A';
assert(updated, sc03.connectionString);


assert(true, sc03.containsKey('user'));
assert(false, sc03.containsKey('foobar'));



