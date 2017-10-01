var express = require('express');
var router = express.Router();


//引入对应控制器模块
var yunzhibopaging = require('../controllers/yunzhibopaging')

router.get('/', yunzhibopaging.index);


module.exports = router;
