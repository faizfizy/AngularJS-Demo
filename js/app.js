var myApp = angular.module('myApp', ['ngRoute', 'heroControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);