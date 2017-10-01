
var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunzhibo = require('../controllers/yunzhibo')

router.get('/', yunzhibo.index);


module.exports = router;