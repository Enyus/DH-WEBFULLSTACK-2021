var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//usando Multer como Middleware:
var upload = require('./middlewares/uploadMiddleware')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets')
var servicosRouter = require('./routes/servicos')
var contatoRouter = require('./routes/contato')
// var servicosRouter = require('./routes/servicos')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//usando Multer como Middleware:
app.use(upload.single('servicoimg'))

app.use('/', indexRouter);
app.use('/users/', usersRouter);
app.use('/pets/', petsRouter);
app.use('/servicos/', servicosRouter);
app.use('/contato/', contatoRouter);
// app.use('/servicos/', servicosRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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