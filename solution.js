//Task 3, Find
// var mongo = require('mongodb').MongoClient;
// var ageLimit = parseInt(process.argv[2]);
// var url = "mongodb://localhost:27017/learnyoumongo";
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var cursor = db.collection('parrots').find({"age":{$gt: ageLimit}});
//   cursor.toArray(function(err, documents){
//     if (err) throw err;
//     console.log(documents);
//   })
//   db.close();
// });

//Task 4, Find project
// var mongo = require('mongodb').MongoClient;
// var ageLimit = parseInt(process.argv[2]);
// // for the url, have some question. should use "learnyoumongo" or the follow one?
// var url = "mongodb://localhost:27017/learnyoumongo";
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var cursor = db.collection('parrots').find({"age":{$gt: ageLimit}}, {name: 1, age: 1, _id: 0});
//   cursor.toArray(function(err, documents){
//     if (err) throw err;
//     console.log(documents);
//   })
//   db.close();
// });

//Task 5, Insert

var mongo = require('mongodb').MongoClient
var firstName = process.argv[2]
var lastName = process.argv[3]
var url = "mongodb://localhost:27017/learnyoumongo"
var insertJSON = {
  firstName : firstName,
  lastName : lastName
}

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(insertJSON,function(err, data){
    if (err) throw err
    console.log(JSON.stringify(insertJSON))
  })
  db.close()
})

// var mongo = require('mongodb').MongoClient
//
// var firstName = process.argv[2]
// var lastName = process.argv[3]
// var doc = {
//   firstName: firstName
// , lastName: lastName
// }
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection('docs')
//   collection.insert(doc, function(err, data) {
//     if (err) throw err
//     console.log(JSON.stringify(doc))
//     db.close()
//   })
// })


//Task 5, Insert
