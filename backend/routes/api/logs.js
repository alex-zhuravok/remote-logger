const guid = require('uuid/v4');
const dbContext = require("../../db/dbContext");

module.exports = function(router) {

  router.get('/logs', function(req, res, next) {
    dbContext.logs.get()
      .then((result) => res.json(result));
  });

  router.post('/logs', function(req, res, next) {
    dbContext.logs.add(req.body)
      .then((result) => {
        res.send('inserted');
      });
  });
}