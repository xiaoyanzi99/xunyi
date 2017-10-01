var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yxypaging = require('../controllers/yxypaging')

router.get('/', yxypaging.index);


module.exports = router;
