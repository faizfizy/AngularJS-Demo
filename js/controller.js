var heroControllers = angular.module('heroControllers', []);

heroControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/data.json').then(function (response) {
        $scope.hero = response.data;
        $scope.order = "nickname";
    });
}]);
