'use strict'

var ControllersModule = require('./index');

    function HomeControl($scope, $http) {
    console.log('called');
};

ControllersModule.controller('HomeControl', HomeControl);
