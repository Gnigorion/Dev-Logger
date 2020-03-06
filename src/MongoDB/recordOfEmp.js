var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("DevLogger");
  var myobj = [
    { Name: 'peter', Id:"40" , EmailId: "peter@robo.com" , PhoneNo: "2441084811" , Password : "ptr@123"},
    { Name: 'vicky', Id:"41" , EmailId: "vicky@robo.com" , PhoneNo: "4311089801" , Password : "vic@123"},
    { Name: 'kavya', Id:"42" , EmailId: "kavya@robo.com" , PhoneNo: "5351089818" , Password : "kavya@123"},
    { Name: 'Ravi', Id:"43" , EmailId: "ravi@robo.com" ,   PhoneNo:   "2001089819" , Password : "rv@123"},
    { Name: 'aman', Id:"44" , EmailId: "aman@robo.com" ,   PhoneNo:   "4921089810" , Password : "amn@123"}

  ];
  dbo.collection("employees").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});



