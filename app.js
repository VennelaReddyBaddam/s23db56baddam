var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose'); // Added missing "const" for mongoose

var app = express();
require('dotenv').config();
const connectionString = process.env.MONGO_CON;

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true });
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
  console.log('Connection to DB succeeded');
});

// Your food model and database seeding code
var food = require('./models/food');

// async function recreateDB() {
//   // Delete everything
//   await food.deleteMany();
//   let instance1 = new food({ "type": "Indian", "name": "Idly", "price": 50 });
//    await instance1.save();
//     console.log('First object saved');
//     let instance2 = new food({ "type": "Italian", "name": "Pizza", "price": 200 });
//   instance2.save().then((doc) => {
//     console.log('Second object saved');
//   });

//   let instance3 = new food({ "type": "chinese", "name": "friedRice", "price": 150 });
//   instance3.save().then((doc) => {
//     console.log('Third object saved');
//   });

//   };

  

// Recreate the database
// let reseed = true;
// if (reseed) {
//   recreateDB();
// }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foodRouter = require('./routes/food');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/food', foodRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

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