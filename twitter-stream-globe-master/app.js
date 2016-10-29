var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

// define static assets before main middleware if running on prod (Heroku workaround)
if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/vendor/', express.static(path.join(__dirname, 'bower_components')));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express middleware
// comment the next line if NOT using Compass / deploying to Cloud Foundry
app.use(require('node-compass')({mode: 'compress'}));

app.use(favicon(__dirname + '/public/images/Twitter_logo_blue_small.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// define static assets after middleware if running on dev (Heroku workaround)
if (app.get('env') === 'development') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/vendor/', express.static(path.join(__dirname, 'bower_components')));
}

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
