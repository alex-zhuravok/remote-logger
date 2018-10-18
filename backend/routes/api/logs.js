const guid = require('uuid/v4');
const dbContext = require("../../db/dbContext");

module.exports = function(router) {

  router.get('/logs', function(req, res, next) {
    dbContext.run((db) => {
      db.collection("logRecords").find().toArray((err, result) => {
        if (err) return console.log(err);
        res.json(result);
      });
    });
  });

  router.post('/logs', function(req, res, next) {
    dbContext.run((db) => {
      console.log(req.body);
      //db.collection("logRecords").insertOne({id: guid(), timestamp: Date.now, type: "warn", message: "something went wrong", content: {}});
      db.collection("logRecords").insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        res.send('inserted');
      });
    });
  });
}