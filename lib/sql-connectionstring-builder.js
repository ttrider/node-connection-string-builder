function Props() {
}
Props.parseBool = function (value) {
    if (!value) return false;
    value = value.toString().toLowerCase();
    switch (value.toString().toLowerCase()) {
        case '1':
        case 'yes':
        case 'true':
            return true;
    }
    return false;
};

Props.normalizeKey = function(key) {
    if (key) {
        key = key.toLowerCase();
        var alt = Props.mappedTo[key];
        if (alt) {
            key = alt;
        }
    }
    return key;
};

// standard properties
Props.APPLICATIONINTENT = 'applicationintent';
Props.APPLICATIONNAME = 'application name';
Props.ASYNCHRONOUSPROCESSING = 'asynchronous processing';
Props.ATTACHDBFILENAME = 'attachdbfilename';
Props.CONNECTTIMEOUT = 'connect timeout';
Props.CONTEXTCONNECTION = 'context connection';
Props.CURRENTLANGUAGE = 'current language';
Props.DATASOURCE = 'data source';
Props.ENCRYPT = 'encrypt';
Props.ENLIST = 'enlist';
Props.FAILOVERPARTNER = 'failover partner';
Props.INITIALCATALOG = 'initial catalog';
Props.INTEGRATEDSECURITY = 'integrated security';
Props.LOADBALANCETIMEOUT = 'load balance timeout';
Props.MAXPOOLSIZE = 'max pool size';
Props.MINPOOLSIZE = 'min pool size';
Props.MULTIPLEACTIVERESULTSETS = 'multipleactiveresultsets';
Props.MULTISUBNETFAILOVER = 'multisubnetfailover';
Props.NETWORKLIBRARY = 'network library';
Props.PACKETSIZE = 'packet size';
Props.PASSWORD = 'password';
Props.PERSISTSECURITYINFO = 'persist security info';
Props.POOLING = 'pooling';
Props.REPLICATION = 'replication';
Props.TRANSACTIONBINDING = 'transaction binding';
Props.TRUSTSERVERCERTIFICATE = 'trustservercertificate';
Props.TYPESYSTEMVERSION = 'type system version';
Props.USERID = 'user id';
Props.USERINSTANCE = 'user instance';
Props.WORKSTATIONID = 'workstation id';

//alias mappings
Props.mappedTo = {};
Props.mappedTo['app'] = Props.APPLICATIONNAME;
Props.mappedTo['async'] = Props.ASYNCHRONOUSPROCESSING;
Props.mappedTo['initial file name'] = Props.ATTACHDBFILENAME;
Props.mappedTo['extended properties'] = Props.ATTACHDBFILENAME;
Props.mappedTo['connection timeout'] = Props.CONNECTTIMEOUT;
Props.mappedTo['timeout'] = Props.CONNECTTIMEOUT;
Props.mappedTo['language'] = Props.CURRENTLANGUAGE;
Props.mappedTo['server'] = Props.DATASOURCE;
Props.mappedTo['addr'] = Props.DATASOURCE;
Props.mappedTo['network address'] = Props.DATASOURCE;
Props.mappedTo['database'] = Props.INITIALCATALOG;
Props.mappedTo['trusted_connection'] = Props.INTEGRATEDSECURITY;
Props.mappedTo['connection lifetime'] = Props.LOADBALANCETIMEOUT;
Props.mappedTo['network'] = Props.NETWORKLIBRARY;
Props.mappedTo['net'] = Props.NETWORKLIBRARY;
Props.mappedTo['pwd'] = Props.PASSWORD;
Props.mappedTo['persistsecurityinfo'] = Props.PERSISTSECURITYINFO;
Props.mappedTo['uid'] = Props.USERID;
Props.mappedTo['user'] = Props.USERID;
Props.mappedTo['wsid'] = Props.WORKSTATIONID;


//convertors
Props.converter = {};
Props.converter[Props.ASYNCHRONOUSPROCESSING] = Props.parseBool;
Props.converter[Props.CONNECTTIMEOUT] = parseInt;
Props.converter[Props.CONTEXTCONNECTION] = Props.parseBool;
Props.converter[Props.ENCRYPT] = Props.parseBool;
Props.converter[Props.ENLIST] = Props.parseBool;
Props.converter[Props.INTEGRATEDSECURITY] = Props.parseBool;
Props.converter[Props.LOADBALANCETIMEOUT] = parseInt;
Props.converter[Props.MAXPOOLSIZE] = parseInt;
Props.converter[Props.MINPOOLSIZE] = parseInt;
Props.converter[Props.MULTIPLEACTIVERESULTSETS] = Props.parseBool;
Props.converter[Props.MULTISUBNETFAILOVER] = Props.parseBool;
Props.converter[Props.PERSISTSECURITYINFO] = Props.parseBool;
Props.converter[Props.POOLING] = Props.parseBool;
Props.converter[Props.REPLICATION] = Props.parseBool;
Props.converter[Props.TRUSTSERVERCERTIFICATE] = Props.parseBool;
Props.converter[Props.USERINSTANCE] = Props.parseBool;


Props.outputName = {};
Props.outputName[Props.APPLICATIONINTENT] = 'ApplicationIntent';
Props.outputName[Props.APPLICATIONNAME] = 'Application Name';
Props.outputName[Props.ASYNCHRONOUSPROCESSING] = 'Asynchronous Processing';
Props.outputName[Props.ATTACHDBFILENAME] = 'AttachDBFilename';
Props.outputName[Props.CONNECTTIMEOUT] = 'Connect Timeout';
Props.outputName[Props.CONTEXTCONNECTION] = 'Context Connection';
Props.outputName[Props.CURRENTLANGUAGE] = 'Current Language';
Props.outputName[Props.DATASOURCE] = 'Data Source';
Props.outputName[Props.ENCRYPT] = 'Encrypt';
Props.outputName[Props.ENLIST] = 'Enlist';
Props.outputName[Props.FAILOVERPARTNER] = 'Failover Partner';
Props.outputName[Props.INITIALCATALOG] = 'Initial Catalog';
Props.outputName[Props.INTEGRATEDSECURITY] = 'Integrated Security';
Props.outputName[Props.LOADBALANCETIMEOUT] = 'Load Balance Timeout';
Props.outputName[Props.MAXPOOLSIZE] = 'Max Pool Size';
Props.outputName[Props.MINPOOLSIZE] = 'Min Pool Size';
Props.outputName[Props.MULTIPLEACTIVERESULTSETS] = 'MultipleActiveResultSets';
Props.outputName[Props.MULTISUBNETFAILOVER] = 'MultiSubnetFailover';
Props.outputName[Props.NETWORKLIBRARY] = 'Network Library';
Props.outputName[Props.PACKETSIZE] = 'Packet Size';
Props.outputName[Props.PASSWORD] = 'Password';
Props.outputName[Props.PERSISTSECURITYINFO] = 'Persist Security Info';
Props.outputName[Props.POOLING] = 'Pooling';
Props.outputName[Props.REPLICATION] = 'Replication';
Props.outputName[Props.TRANSACTIONBINDING] = 'Transaction Binding';
Props.outputName[Props.TRUSTSERVERCERTIFICATE] = 'TrustServerCertificate';
Props.outputName[Props.TYPESYSTEMVERSION] = 'Type System Version';
Props.outputName[Props.USERID] = 'User ID';
Props.outputName[Props.USERINSTANCE] = 'User Instance';
Props.outputName[Props.WORKSTATIONID] = 'Workstation ID';

function ConnectionStringBuilder(connectionString) {
    // normalized set of connection string properties;
    this.properties = {};

    if (connectionString) {
        this.connectionString = connectionString;
    }
}

ConnectionStringBuilder.prototype = {
    get connectionString() {
        var buffer = '';
        for (var key in this.properties) {

            var friendlyKey = Props.outputName[key];
            if (!friendlyKey) {
                friendlyKey = key;
            }

            buffer += friendlyKey + '=' + this.properties[key].toString() + ';';
        }
        return buffer;
    },
    set connectionString(val) {
        // clear keys collection
        this.clear();
        if (!val) {
            return;
        }

        var propSet = val.split(ConnectionStringBuilder.propertiesRegEx);
        for (var i = 0; i < propSet.length; i++) {
            var prop = propSet[i];
            if (prop) {
                var match = prop.match(ConnectionStringBuilder.nameValueRegEx);
                if (match && match.length >= 3) {
                    this.add(match[1], match[2]);
                }
            }
        }
    },

    get keys() {
        var keys = [];
        for (var key in this.properties) {
            keys.push(key);
        }
        return keys;
    },
    
    

    get applicationIntent() { return this.properties[Props.APPLICATIONINTENT]; },
    set applicationIntent(value) { this.add(Props.APPLICATIONINTENT, value); },
    get applicationName() { return this.properties[Props.APPLICATIONNAME]; },
    set applicationName(value) { this.add(Props.APPLICATIONNAME, value); },
    get asynchronousProcessing() { return this.properties[Props.ASYNCHRONOUSPROCESSING]; },
    set asynchronousProcessing(value) { this.add(Props.ASYNCHRONOUSPROCESSING, value); },
    get attachDBFilename() { return this.properties[Props.ATTACHDBFILENAME]; },
    set attachDBFilename(value) { this.add(Props.ATTACHDBFILENAME, value); },
    get connectTimeout() { return this.properties[Props.CONNECTTIMEOUT]; },
    set connectTimeout(value) { this.add(Props.CONNECTTIMEOUT, value); },
    get contextConnection() { return this.properties[Props.CONTEXTCONNECTION]; },
    set contextConnection(value) { this.add(Props.CONTEXTCONNECTION, value); },
    get currentLanguage() { return this.properties[Props.CURRENTLANGUAGE]; },
    set currentLanguage(value) { this.add(Props.CURRENTLANGUAGE, value); },
    get dataSource() { return this.properties[Props.DATASOURCE]; },
    set dataSource(value) { this.add(Props.DATASOURCE, value); },
    get encrypt() { return this.properties[Props.ENCRYPT]; },
    set encrypt(value) { this.add(Props.ENCRYPT, value); },
    get enlist() { return this.properties[Props.ENLIST]; },
    set enlist(value) { this.add(Props.ENLIST, value); },
    get failoverPartner() { return this.properties[Props.FAILOVERPARTNER]; },
    set failoverPartner(value) { this.add(Props.FAILOVERPARTNER, value); },
    get initialCatalog() { return this.properties[Props.INITIALCATALOG]; },
    set initialCatalog(value) { this.add(Props.INITIALCATALOG, value); },
    get integratedSecurity() { return this.properties[Props.INTEGRATEDSECURITY]; },
    set integratedSecurity(value) { this.add(Props.INTEGRATEDSECURITY, value); },
    get loadBalanceTimeout() { return this.properties[Props.LOADBALANCETIMEOUT]; },
    set loadBalanceTimeout(value) { this.add(Props.LOADBALANCETIMEOUT, value); },
    get maxPoolSize() { return this.properties[Props.MAXPOOLSIZE]; },
    set maxPoolSize(value) { this.add(Props.MAXPOOLSIZE, value); },
    get minPoolSize() { return this.properties[Props.MINPOOLSIZE]; },
    set minPoolSize(value) { this.add(Props.MINPOOLSIZE, value); },
    get multipleActiveResultSets() { return this.properties[Props.MULTIPLEACTIVERESULTSETS]; },
    set multipleActiveResultSets(value) { this.add(Props.MULTIPLEACTIVERESULTSETS, value); },
    get multiSubnetFailover() { return this.properties[Props.MULTISUBNETFAILOVER]; },
    set multiSubnetFailover(value) { this.add(Props.MULTISUBNETFAILOVER, value); },
    get networkLibrary() { return this.properties[Props.NETWORKLIBRARY]; },
    set networkLibrary(value) { this.add(Props.NETWORKLIBRARY, value); },
    get packetSize() { return this.properties[Props.PACKETSIZE]; },
    set packetSize(value) { this.add(Props.PACKETSIZE, value); },
    get password() { return this.properties[Props.PASSWORD]; },
    set password(value) { this.add(Props.PASSWORD, value); },
    get persistSecurityInfo() { return this.properties[Props.PERSISTSECURITYINFO]; },
    set persistSecurityInfo(value) { this.add(Props.PERSISTSECURITYINFO, value); },
    get pooling() { return this.properties[Props.POOLING]; },
    set pooling(value) { this.add(Props.POOLING, value); },
    get replication() { return this.properties[Props.REPLICATION]; },
    set replication(value) { this.add(Props.REPLICATION, value); },
    get transactionBinding() { return this.properties[Props.TRANSACTIONBINDING]; },
    set transactionBinding(value) { this.add(Props.TRANSACTIONBINDING, value); },
    get trustServerCertificate() { return this.properties[Props.TRUSTSERVERCERTIFICATE]; },
    set trustServerCertificate(value) { this.add(Props.TRUSTSERVERCERTIFICATE, value); },
    get typeSystemVersion() { return this.properties[Props.TYPESYSTEMVERSION]; },
    set typeSystemVersion(value) { this.add(Props.TYPESYSTEMVERSION, value); },
    get userID() { return this.properties[Props.USERID]; },
    set userID(value) { this.add(Props.USERID, value); },
    get userInstance() { return this.properties[Props.USERINSTANCE]; },
    set userInstance(value) { this.add(Props.USERINSTANCE, value); },
    get workstationID() { return this.properties[Props.WORKSTATIONID]; },
    set workstationID(value) { this.add(Props.WORKSTATIONID, value); },
};

ConnectionStringBuilder.nameValueRegEx = /(.+?)\s*=\s*(.*)/;
ConnectionStringBuilder.propertiesRegEx = /\s*;\s*/;



ConnectionStringBuilder.prototype.clear = function () {
    this.properties = {};
};

ConnectionStringBuilder.prototype.add = function (key, value) {
    if (!key) {
        return;
    }
    key = Props.normalizeKey(key);

    var converter = Props.converter[key];
    if (converter) {
        value = converter(value);
    }
    this.properties[key] = value;
};

ConnectionStringBuilder.prototype.remove = function (key) {
    if (!key) {
        return;
    }
    
    delete this.properties[Props.normalizeKey(key)];
};

ConnectionStringBuilder.prototype.getValue = function (key) {
    if (!key) {
        return null;
    }
    return this.properties[Props.normalizeKey(key)];
};

ConnectionStringBuilder.prototype.setValue = function (key, value) {
    this.add(key, value);
};

ConnectionStringBuilder.prototype.containsKey = function (key) {
    if (!key) {
        return false;
    }
    return !(this.properties[Props.normalizeKey(key)] === undefined);
};


module.exports = ConnectionStringBuilder;

