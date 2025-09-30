var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bu siteye kayit ol senin de işin görülsün' });
});

module.exports = router;
