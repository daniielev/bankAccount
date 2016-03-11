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
        .when('/movements', {
            templateUrl: 'views/movements.html',
            controller : 'MovementsCtrl'
        })
        .when('/account', {
            templateUrl: 'views/account.html',
            controller : 'AccountCtrl'
        })
        .when('/details/:id', {
            templateUrl: 'views/details.html',
            controller : 'DetailsCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);