let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    path = require('path');

const app = express();

let routes = require('./routes');

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
const PORT = 3000;

// app.route('/').get(function(req,res){
//   res.send('Hello from Server');
// })

// app.route('/enroll').post(function(req,res){
//   console.log(req.body);
//   res.status(200).send({'message': 'Data Received'});
//   const {name, password} = req.body;
// })

app.use(function(req, res, next) {
  next();
});


app.listen(PORT,function(){
  console.log('app listening on port: ' + PORT );
});
