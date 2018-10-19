const MongoClient = require('mongodb').MongoClient;
const DbModel = require('./dbModel');

class DbContext {

    constructor() {
        this.connectionString = "mongodb://localhost:27017/";
        this.dbName = "remote-logger-db";
        
        this.accounts = new DbModel(this, "accounts");
        this.applications = new DbModel(this, "applications");
        this.instances = new DbModel(this, "instances");
        this.instanceGroups = new DbModel(this, "instanceGroups");
        this.logs = new DbModel(this, "logRecords");
    }

    connect() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.connectionString)
                .then((client, err) => {
                    if (err) {
                        console.log(err);
                        reject();
                    }
                    else {
                        let db = client.db(this.dbName);
                        resolve(db)
                            .then(() => {
                                client.close();
                            });
                    }
                });
        });   
    }
}

module.exports = new DbContext();
 