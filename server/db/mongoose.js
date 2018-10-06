var mongoose = require('mongoose');

// const {MONGODB_URI} = require('./../env.js');
var MONGODB_URI = 'mongodb://hohetro:uGw1vMp0ka7qm@ds125073.mlab.com:25073/node_todo';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
