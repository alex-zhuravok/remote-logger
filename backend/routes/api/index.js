var express = require('express');
var router = express.Router();
var logs = require('./logs');

/* GET API description page page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

logs(router);

module.exports = router;