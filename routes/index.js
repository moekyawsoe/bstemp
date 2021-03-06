var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/error', function(req, res, next) {
  res.render('error');
});

router.get('/login',function(req, res){
  res.render('login');
});

router.get('/register',function(req, res, next){
  res.render('register');
});

router.get('/forgetpassword',function(req, res, next){
  res.render('forget-password');
});

router.get('/newpage',function(req, res){
  res.render('newpage');
});

module.exports = router;
