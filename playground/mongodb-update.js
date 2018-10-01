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

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5bb1ef05f1a6ee0509c61c39')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5baa2a66c4d5930405dbbfba')
    }, {
      $set: {
        name: 'Eve2'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });


    // client.close();
});
