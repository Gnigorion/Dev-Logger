// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/DevLogger';

// MongoClient.connect(url, function(err, db) {

//     var cursor = db.collection('users').find();

//     cursor.each(function(err, doc) {

//         console.log(doc);

//     });
// });








// /**** Connect to MongoDB ****/
// 	// Since 2.10.0, uses MongoClient
// 	MongoClient mongo = new MongoClient("localhost", 27017);

// 	/**** Get database ****/
// 	// if database doesn't exists, MongoDB will create it for you
// 	DB db = mongo.getDB("DevLogger");

// 	/**** Get collection / table from 'DevLogger' ****/
// 	// if collection doesn't exists, MongoDB will create it for you
// 	DBCollection table = db.getCollection("users");

// 	DBCursor cursor = table.find();
// 	while(cursor.hasNext()) {
// 		String  ss = cursor.next().toString();
// 		JSONObject json = new JSONObject(ss);

// 		System.out.println(json);
// 	}



// $(document).ready(function () {
//   $.getJSON(url,
//   function (json) {
//       var tr;
//       for (var i = 0; i < json.length; i++) {
//           tr = $('<tr/>');
//           tr.append("<td>" + json[i].User_Name + "</td>");
//           tr.append("<td>" + json[i].score + "</td>");
//           tr.append("<td>" + json[i].team + "</td>");
//           $('table').append(tr);
//       }
//   });
// });





















var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;
var server = new Server('localhost', 27017, {
  auto_reconnect: true
});
var db = new Db('DevLogger', server);
var onErr = function(err, callback) {
  db.close();
  callback(err);
};
