'use strict';

var express = require('express'),
	bodypaser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	jwt = require('jsonwebtoken'),
	uuid = require('node-uuid'),
	config = require('./config'),
	router = require('./router');


/**
 * server setting
 */
var app = express();
var approuter = express.Router();
var port = process.env.PORT || 8080;
mongoose.connect(config.database, config.options);//connect database
app.set('superSecret', config.secret); // secret variable
// use body parser so we can get info from POST and/or URL parameters
app.use(bodypaser.urlencoded({
	extended: false
}));
app.use(bodypaser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

/**
 * init admin user
 */
// var admin = new User({
// 	name: 'admin',
// 	password: hash.generate('admin'),
// 	admin: true
// });

// admin.save(function(err) {
// 	if (err) throw err;
// 	console.log('User saved successfully');
// })

/**
 * router setting
 */
approuter.get('/', router.index);

approuter.post('/login', router.login);

app.use('/api/v1',approuter);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);


