const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb://localhost:27017/";
const dbName = "remote-logger-db";

const DbContext = function () {
    this.run = function(callback) {
        MongoClient.connect(connectionString, function(err, client) {

            if (err) {
                return console.log(err);
            }

            let db = client.db(dbName);
            callback(db);
            client.close();
        });
    }
}

module.exports = new DbContext();
 