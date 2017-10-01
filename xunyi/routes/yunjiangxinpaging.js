var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunjiangxinpaging = require('../controllers/yunjiangxinpaging')

router.get('/', yunjiangxinpaging.index);


module.exports = router;