 /*jshint esversion: 6*/
angular.module('app')
.controller('userController', ['$scope', 'UsersService',
    function($scope, UsersService){
          UsersService.getUsers()
            .then((res) => {
              $scope.res = res.data;
            });

  }
]);