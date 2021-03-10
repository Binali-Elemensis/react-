
module.exports = {
    addUser
}

async function addUser (req, res){
    try{
    let user = req.body
    var dbo = db.db("myDatabase");
    var myobj = { name: "Company Inc", address: "Highway 37" };
   

    let insertUser =  dbo.collection("USER").insert(myobj)

    console.log(insertUser);
    res.send({
        'success': true,
        'message': 'User add Successfully',
        addRecords: insertUser
    });
} catch (error) {
    console.log(error)
    res.status(500).send({
        'success': false,
        'message': 'Error Add User',

    });
}

}


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myDatabase");
    var myobj = { name: "vvvvv", email: "Hfgfd7" , password:"4444"};
    dbo.collection("USER").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  