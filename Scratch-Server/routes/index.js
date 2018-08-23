var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/led',require('./led/index.js'));
router.use('/button',require('./button/index.js'));
router.use('/speaker',require('./speaker/index.js'));
router.use('/motor',require('./motor/index.js'));
router.use('/display',require('./display/index.js'));


module.exports = router;
