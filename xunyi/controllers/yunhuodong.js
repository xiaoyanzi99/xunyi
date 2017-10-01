// 定义对象
var yunhuodong = {};


yunhuodong.index = function(req, res) {

	res.render('yunhuodong')
}

// 向外导出
module.exports = yunhuodong;