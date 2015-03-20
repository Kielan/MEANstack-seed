'use strict';

var controllersModule = require('./index.js');

function NavBarControl($scope, $http) {

    console.log('called');
}

function BookControl($scope, $http) {

    $scope.NewObject = function (form) {
	console.log('controller');
	return $http.post("http://localhost:3000/api/newbook", {
	    title: form.title,
	    author: form.author,
	    quote: form.quote
	});
    }
    
}

function LoginControl ($scope, $http) {

    $scope.LogIn = function(form) {
	return $http.post("http://localhost:3000/api/login", {
	    email: form.email,
	    password: form.password
	});
    }
    
}

function SignupControl ($scope, $http) {
    $scope.SignUp = function(form) {
	
	return $http.post("http://localhost:3000/api/signup", {
	    name: form.name,
	    username: form.username,
	    email: form.email,
	    password: form.password
	});
    }
    
}

controllersModule.controller('NavControl', NavBarControl);
controllersModule.controller('BookControl', BookControl);
controllersModule.controller('LoginControl', LoginControl);
controllersModule.controller('SignupControl', SignupControl);
