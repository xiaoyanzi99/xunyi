// 定义对象
var yunzhibo = {};

// 定义首页方法
yunzhibo.index = function(req, res) {

	res.render('yunzhibo')
}

// 向外导出
module.exports = yunzhibo;