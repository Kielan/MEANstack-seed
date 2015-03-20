'use strict';

var controllersModule = require('./index.js');

function NavBarControl($scope, $http) {

    console.log('called');
}

controllersModule.controller('NavControl', NavBarControl);
