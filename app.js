var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var domainsRouter = require('./routes/domains');

var coursesRouter = require('./routes/courses');
var subcoursesRouter = require('./routes/subcourses');
var coursesnameRouter = require('./routes/coursesname');
var subcoursesnameRouter = require('./routes/subcoursesname');
var collegelisting_subcourseRouter = require('./routes/collegelisting_subcourse');
var collegelisting_districtRouter = require('./routes/collegelisting_district');

var app = express();
app.use(cors());
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/domains', domainsRouter);

app.use('/courses', coursesRouter);
app.use('/subcourses', subcoursesRouter);
app.use('/coursesname', coursesnameRouter);
app.use('/subcoursesname', subcoursesnameRouter);
app.use('/collegelisting_subcourse', collegelisting_subcourseRouter);
app.use('/collegelisting_district', collegelisting_districtRouter);

module.exports = app;
