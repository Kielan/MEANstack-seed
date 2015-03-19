'use strict';

function Routes($routeProvider, $stateProvider, $locationProvider) {

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
