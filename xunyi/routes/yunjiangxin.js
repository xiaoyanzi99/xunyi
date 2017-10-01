var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunjiangxin = require('../controllers/yunjiangxin')


router.get('/', yunjiangxin.index);

module.exports = router;