// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB sercer');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'test to do'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    db.collection('Todos').deleteOne({text: "Something to do"}).then((result) => {
        console.log(result);
    });

    // {
    // "text" : "Something to do",
    // "completed" : true
    // }

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
      console.log(result);
    });

    // client.close();
});
