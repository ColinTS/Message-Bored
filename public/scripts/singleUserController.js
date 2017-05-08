 /*jshint esversion: 6*/
angular.module('app')
.controller('singleUserController', ['$scope', 'UsersService',
    function($scope, UsersService){
          UsersService.getUser(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
            .then((res) => {
              $scope.name = res.data;
              console.log(res);
          });
  }
]);