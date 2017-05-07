angular.module('app')
.controller('userController', ['$scope',
    function($scope){
      $scope.testScope = "hello scope";
      this.controllerAsTest = "hello controllerAs";
    }
    ]);