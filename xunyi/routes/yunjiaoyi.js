var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunjiaoyi = require('../controllers/yunjiaoyi')

router.get('/', yunjiaoyi.index);


module.exports = router;