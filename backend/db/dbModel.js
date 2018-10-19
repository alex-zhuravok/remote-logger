const MongoClient = require('mongodb').MongoClient;


class DbModel {
    
    constructor(dbContext, name) {
        this.context = dbContext;
        this.collectionName = name;
    }

    get(filter) {
        return new Promise((resolve, reject) => {
            this.context.connect()
            .then(db => {
                if (!filter)
                    filter = {};
                db.collection(this.collectionName)
                .find(filter)
                .toArray((err, result) => {
                    if (err) {
                        reject("error");
                        console.log(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        });
    }

    add(item) {
        return new Promise((resolve, reject) => {
            this.context.connect()
            .then(db => {
                db.collection(this.collectionName)
                .insertOne(item, (err, result) => {
                    if (err) {
                        reject("error");
                        console.log(err);
                    }
                    else {
                        resolve(result);
                    }
                });                
            });
        });
    }

    update(item) {

    }

    delte(filter) {

    }
}

module.exports = DbModel;