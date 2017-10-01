var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunhuodong = require('../controllers/yunhuodong')

router.get('/', yunhuodong.index);


module.exports = router;