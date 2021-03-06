var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helpers = require('./auth/helpers');
var cors = require('cors');

var api = require('./api/index');
var auth = require('./auth/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use(helpers.authMiddleWare);

app.use('/auth', auth);
app.use('/api', helpers.ensureauthenticated, api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
           res.status(err.status || 500);
         res.json({
             message: err.message,
              error: err
         });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json( {
    message: err.message,
    error: {}
  });
});

module.exports = app;
