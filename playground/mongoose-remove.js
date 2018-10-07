const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

console.log(id);

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
});
