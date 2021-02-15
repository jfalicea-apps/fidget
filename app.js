var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var buttonRouter = require('./services/translateButton/buttonTranslation.routes');
var usersRouter = require('./services/users/users.route');
const securityRouter = require('./services/auth/checkSecKey');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
// app.use('/security', securityRouter);
app.use('/button', buttonRouter);

module.exports = app;
