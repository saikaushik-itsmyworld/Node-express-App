// This is a super simple Hello World AngularJS App
(function() {
    angular
      .module('yourApp', [])
      .controller('YourController', ['$scope', function($scope) {         
        $scope.hello = 'Hello World';
      }]);
  })();