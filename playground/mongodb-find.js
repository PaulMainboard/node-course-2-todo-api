//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var user = {name: 'Paul', age: 27};
//var {name} = user;
//console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
  
//    db.collection('Todos').find({
//        _id: new ObjectID('5903906d5db62a2936d8d723')
//    }).toArray().then((docs) => {
//        console.log("Todos");
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count ${count}`);
//        
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
    db.collection('Users').find({
        name: "Paul Williams"
    }).toArray().then((docs) => {
        console.log("Name: " + docs[0].name);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch name');
    });
    //db.close();
});