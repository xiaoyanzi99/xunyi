var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunxueyuanpaging = require('../controllers/yunxueyuanpaging')

router.get('/',yunxueyuanpaging.index);


module.exports = router;