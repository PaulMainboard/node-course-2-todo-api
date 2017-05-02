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
    
//    db.collection("Todos").findOneAndUpdate({
//        _id : new ObjectID('5903906d5db62a2936d8d723')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5902287a8a3ad71e3159780f')
    }, {
        $set: {
            name: "Paul Williams"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    
    //db.close();
});