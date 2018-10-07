var mongoose = require('mongoose');

// const {MONGODB_URI} = require('./../env.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

process.env.NODE_ENV === 'test';
