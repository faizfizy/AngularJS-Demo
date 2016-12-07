var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

    $scope.hero = {
        'nickname': 'Sniper',
        'name': 'Kardel Sharpeye',
        'attribute': 'Agility',
    }

});