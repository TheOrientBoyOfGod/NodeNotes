
var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我的blog' });
});

module.exports = router;
