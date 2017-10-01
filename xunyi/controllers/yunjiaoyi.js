// 定义对象
var yunjiaoyi = {};


yunjiaoyi.index = function(req, res) {

	res.render('yunjiaoyi')
}

// 向外导出
module.exports = yunjiaoyi;