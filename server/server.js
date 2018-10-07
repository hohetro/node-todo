const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/123456
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(ObjectID.isValid(id)){
    Todo.findById(id).then((todo) => {
      if(todo){
        res.send({todo});
      }else{
        res.status(404).send({});
      }
    }, (e) => {
      res.status(400).send(e);
    });
  }else{
    res.status(404).send('Not Valid Id');
  }
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(ObjectID.isValid(id)){
    Todo.findByIdAndRemove(id).then((todo) => {
      if(todo){
        res.send({todo});
      }else{
        res.status(404).send({});
      }
    }, (e) => {
      res.status(400).send(e);
    });
  }else{
    res.status(404).send('Not Valid Id');
  }
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)){
    return  res.status(404).send('Not Valid Id');
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      return res.status(400).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// var user = new User({
//   email: 'masa@gmail.com'
// });

// user.save().then((doc) => {
//   console.log("Success!",doc);
// }, (e) => {
//   console.log("Erorr!",e);
// });

// var newTodo = new Todo ({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unabel to save todo');
// });
//
// var otherTodo = new Todo ({
//   text: 23,
//   // completed: true,
//   // completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable', e);
// });
