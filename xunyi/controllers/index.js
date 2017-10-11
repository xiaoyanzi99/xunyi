// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};


index.index = function(req, res) {

	res.render('index')
}
index.login = function(req, res) {

	res.render('login')
}
index.zhuce = function(req, res) {

	res.render('zhuce')
}
index.checkUser = function(req,res){
	res.json({
		ERROR:0,
		msg:'ok'
	})
	//获取用户纯笛的参数
	/*
		req.query 获取get方式传递的参数
		req.body 获取post方式传递的参数
	*/
	// console.log(req.body)	

	//条件
	var names = {
		username: req.body.username
	}

	//获取到用户传递参数之后  发送给服务器进行验证
}
// 向外导出
module.exports = index;