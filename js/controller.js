var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {

    $http.get('js/data.json').then(function (response) {
        $scope.hero = response.data;
        $scope.order = "nickname";
    });

}]);
