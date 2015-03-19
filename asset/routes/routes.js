var multipart = require('connect-multiparty');
var sessions = require('client-sessions');
var mongoose = require('mongoose');
var User = require('../models/userModel.js');
var Book = require('../models/bookModel.js');;
var crypto = require('crypto');
var multipartMiddleware = multipart();

//routes
module.exports = function (app) {

    app.get('/', function(req, res) {
	res.render('index');
    });
    
}//module bracket
