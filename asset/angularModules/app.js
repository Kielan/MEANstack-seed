'use strict';

var angular = require('angular');
var $ = require('jquery');

//angular modules
require('angular-cookies');
require('./lib/angular-ui-router');
require('./lib/permissionConfig');
require('./controllers/index');

//create and bootstrap programmatically initialize through window for testing
angular
    .element(document)
    .ready(function() {

    var requires = [
	'ui.router',
	'MEANApp.controllers'
    ];

    window.app = angular.module('MEANApp', requires);

    app.config(require('./routes'));

    angular.bootstrap(document, ['MEANApp']);
    
});
