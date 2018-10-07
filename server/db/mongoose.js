var mongoose = require('mongoose');

// const {MONGODB_URI} = require('./../env.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
