var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var yunjiangxin = require('./routes/yunjiangxin');
var yunzhibo = require('./routes/yunzhibo');
var yunxueyuan = require('./routes/yunxueyuan');
var yunhuodong = require('./routes/yunhuodong');
var yunjiaoyi = require('./routes/yunjiaoyi');
var yunjiangxinpaging = require('./routes/yunjiangxinpaging');
var yunzhibopaging = require('./routes/yunzhibopaging');
var yunxueyuanpaging = require('./routes/yunxueyuanpaging');
var yunhuodongpaging = require('./routes/yunhuodongpaging');
var yunjiaoyipaging = require('./routes/yunjiaoyipaging');
var yxypaging = require('./routes/yxypaging');
var yjypaging = require('./routes/yjypaging');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/yijiangxin', yunjiangxin);
app.use('/yizhibo', yunzhibo);
app.use('/yixueyuan', yunxueyuan);
app.use('/yihuodong', yunhuodong);
app.use('/yijiaoyi', yunjiaoyi);
app.use('/yijiangxinpaging', yunjiangxinpaging);
app.use('/yizhibopaging', yunzhibopaging);
app.use('/yixueyuanpaging', yunxueyuanpaging);
app.use('/yihuodongpaging', yunhuodongpaging);
app.use('/yijiaoyipaging', yunjiaoyipaging);
app.use('/yxypaging', yxypaging);
app.use('/yjypaging', yjypaging);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
