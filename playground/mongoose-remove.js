const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bb969e016cafed873d5b4ae';

console.log(id);

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then();

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
});
