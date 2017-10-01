var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunhuodongpaging = require('../controllers/yunhuodongpaging')

router.get('/', yunhuodongpaging.index);


module.exports = router;
