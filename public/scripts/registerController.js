 /*jshint esversion: 6*/
angular.module('app')
.controller('registerController', ['$scope', 'UsersService',
  function($scope, UsersService){
    $scope.createUser = function(newUser) {
      var addUser = {
        name: newUser.name
      };

      UsersService.createUser(addUser)
        .then((user) => {
          console.log(user);
        });
    };
  }
]);