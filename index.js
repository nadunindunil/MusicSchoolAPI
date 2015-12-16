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



app.get('/getStudentsList', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM student', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});

///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getTeachersList', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM teacher', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});

///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getCoursesList', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM course', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});

///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getTelNumList', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM phone_numbers', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});

///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getPerfGrpsList', function(req, res){
  //connection.connect();

  connection.query('SELECT * FROM performance_group', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  

});


///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/findTelNum/:id', function(req, res){
  //connection.connect();
  var ID = req.params.id;
  connection.query('SELECT * FROM phone_numbers WHERE number_ID= ?',[ID], function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    console.log('The solution is: ', rows);
  });
  
  //connection.end();
  
  
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/insertStudent', function (req, res) {
  console.log(req.body.name);
  var post  = {
    ID: req.body.ID, 
    name: req.body.name,
    gender: req.body.gender,
    DOB: req.body.DOB,
    access_level: req.body.access_level,
    course_ID: req.body.courseID,
    performance_group_ID:req.body.performance_group_ID,
    phone_number_id:req.body.phone_number_id };

  var query = connection.query('INSERT INTO student SET ?', post, function(err, result) {
    // Neat!
  });
  //console.log(query.sql);
  res.end('done');
    
});

//////////////////////////////////////////////////////////////////////////////////////////////


app.post('/insertTelNum', function (req, res) {

  var post  = {
    number_ID: req.body.ID, 
    location: req.body.location,
    phone_number: req.body.phone_number
    };

  var query = connection.query('INSERT INTO phone_numbers SET ?', post, function(err, result) {
    // Neat!
  });
  console.log(query.sql);
  res.end('done');
    
});

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