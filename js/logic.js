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
        .otherwise({redirectTo: '/'});
}]);