var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunjiaoyipaging = require('../controllers/yunjiaoyipaging')

router.get('/', yunjiaoyipaging.index);


module.exports = router;