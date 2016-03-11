angular.module('bankAccount',[
    'ngRoute',
    'persistence',
    'bankAccount.controllers'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/register.html',
            controller : 'RegisterCtrl'
        })
        .when('/account', {
            templateUrl: 'views/account.html',
            controller : 'AccountCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);