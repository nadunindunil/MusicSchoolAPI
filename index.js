var express = require('express');
var app = express();
var bcrypt = require('bcrypt-nodejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'g19'
});

// connection.connect();

// connection.query('SELECT * FROM student', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows);
// });

// connection.end();



app.get('/getStudentsDetails', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM student', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});

///////////////////////////////////////////////////////////////////////////////////////////////////////



// var notifi= new mongoose.Schema({
//   Time: Date,
//   Info : String
// })

// var notification = mongoose.model('notifi',notifi);

// app.post('/createNotifi', function (req, res) {
  
//     var current = new Date();
//     current.setHours(current.getHours() + 6);
    
     
//     var add = new notification({
//       //num : {type: Number, unique: true},
//       Time : current,
//       Info : req.body.info 
//     });
  
//     add.save(function (err) {
//       if (err) // ...
//       console.log('done')
//       res.end('Done')
//     });
// });



// app.get('/getNotifi', function(req, res){
  
//   notification.find({}, 'Time Info -_id', function (err, notifi) {     
//    res.json(notifi);})

// });





// app.get('/sample', function(req, res){
//     var v = 0;
//     var x = 1;
    
//     if(v==0){
//             if(x==1){   res.end("sfa") ; }
//             else {console.log("fasaf");}  
//     }

// });




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});