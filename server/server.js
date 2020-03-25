/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
var User = require('./Models/User');
const Post = require('./Models/post');
const Project = require('./Models/post');

const mongoose = require('./Utilities/mongooseConfig')();

const routes = require("./Routes/routes");
const authRoute = require('./Routes/auth');
const config = require("./Utilities/config").config;
const postsRoutes = require('./Routes/postsRoutes');


app.use(express.static(path.join(__dirname, '/LoginRegDevlogger')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use((err, req, res, next) => {
  return res.send({
    "statusCode": 401,
    "statusMessage": "Something Went Wrong!"
  });
});

app.use('/', routes);
app.use('/auth', authRoute);
app.use('/dashboard',postsRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next();
});




/**
 * Start Express server.
 */
server.listen(config.NODE_SERVER_PORT.port, () => {
  console.log('app listening on port:' + config.NODE_SERVER_PORT.port);
});
