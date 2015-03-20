'use strict';

var permission = require('./lib/routingConfig');


function Routes($stateProvider, $locationProvider) {
    var access = permission.accessLevels;
    
    $stateProvider.state('public', {
	url: '/',
	abstract: true,
	template: "<ui-view/>",
	data: {
	    access: access.public
	}
    })
    
}

module.exports = Routes;
