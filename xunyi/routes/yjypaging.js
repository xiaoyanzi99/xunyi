var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yjypaging = require('../controllers/yjypaging')

router.get('/', yjypaging.index);


module.exports = router;
