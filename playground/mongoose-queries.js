const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = "590efbd679c58b9411638f6711";
//
//if (!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//}

//Todo.find({
//   _id: id 
//}).then((todos) => {
//   console.log('Todos', todos); 
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//   console.log('Todo', todo); 
//});

//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('Id not found');
//    }
//    console.log('Todo By Id', todo);
//}).catch((e) => console.log(e));

var id = '590b608df1e19f2516b27dd4';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User ID', user);
}).catch((e) => console.log(e));