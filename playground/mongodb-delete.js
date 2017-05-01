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
  
    // deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    
    // deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//       console.log(result); 
//    });
    
    // findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    });
    
    // deleteMany
    db.collection('Users').deleteMany({name: "Paul Williams"}).then((result) => {
        console.log(result);
    });
    
    // delete One by id
    db.collection('Users').deleteOne({_id : ObjectID('59071ffb21de0e565a094238')}).then((result) => {
        console.log(result);
    });
    
    //db.close();
});