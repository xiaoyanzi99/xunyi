var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunxueyuan = require('../controllers/yunxueyuan')

router.get('/', yunxueyuan.index);


module.exports = router;