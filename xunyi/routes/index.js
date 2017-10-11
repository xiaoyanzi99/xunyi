var express = require('express');
var router = express.Router();


//引入对应控制器模块
var index = require('../controllers/index')

router.get('/', index.index);
router.get('/login', index.login);
router.get('/zhuce', index.zhuce);
router.post('/checkUser',index.checkUser)


module.exports = router;
