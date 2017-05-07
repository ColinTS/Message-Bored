angular.module('app')
.controller('loginController', ['$scope',
    function($scope){
      $scope.testScope = "hello scope";
      this.controllerAsTest = "hello controllerAs";
    }
    ]);