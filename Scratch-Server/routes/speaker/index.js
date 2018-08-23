var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/on',require('./on.js'));
router.use('/off',require('./off.js'));


module.exports = router;
