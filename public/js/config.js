'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/deposit', {
            templateUrl: 'views/deposit.html'
        }).
        when('/withdraw', {
            templateUrl: 'views/withdraw.html'
        }).
        when('/create_vault', {
            templateUrl: 'views/create_vault.html'
        }).
        when('/rob_vault', {
            templateUrl: 'views/rob_vault.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);