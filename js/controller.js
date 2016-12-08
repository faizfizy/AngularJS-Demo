/*global angular */
var heroControllers = angular.module('heroControllers', []);

heroControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    "use strict";
    $http.get('js/data.json').then(function (response) {
        $scope.hero = response.data;
        $scope.order = "nickname";
    });
}]);

heroControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    "use strict";
    $http.get('js/data.json').then(function (response) {
        $scope.hero = response.data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);
