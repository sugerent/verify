express = require('express');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
app = express();
util = require('util');
db = require('./config/db');

/****** view engine setup ******/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/**
 * BodyParser
 */
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
/****** static location ******/
app.use(express.static(path.join(__dirname, 'public')));
/****** version info. ******/
current_version = 'v1';
/****** switching test API ******/
const isTestAPI = false;

/**
 * 페이지, 모듈 매칭
 */
// DEFAULT - {BASE_URL}/index
const indexRouter = require(util.format('./application/%s/routes/index', current_version));
app.use('/', indexRouter);
// System - {BASE_URL}/api/v1/system
const systemRouter = require(util.format('./application/%s/routes/system', current_version));
app.use(util.format('/api/%s/system', current_version), systemRouter);
// USER - {BASE_URL}/api/v1/user
const userRouter = require(util.format('./application/%s/routes/user', current_version));
app.use(util.format('/api/%s/user', current_version), userRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
