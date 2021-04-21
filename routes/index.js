var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/doomsday', function(req, res, next) {
  if (Date.now() < new Date("Apr 22nd, 2021 16:00:00")) {
    res.redirect('/');
  }
  res.render('explosion.html');
});

module.exports = router;
