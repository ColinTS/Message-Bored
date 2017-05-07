angular.module('app')
.service('UsersService', ['$http', function ($http) {

  return {
    createUser: function(newUser){
     return $http.post('/api/users', newUser);
    }
  };


}]);