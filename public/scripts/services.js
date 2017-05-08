angular.module('app')
.service('UsersService', ['$http', function ($http) {

  return {
    createUser: function(newUser){
     return $http.post('/api/users', newUser);
    },
    getUsers: function(){
      return $http.get('/api/users');
    },
    getUser: function(id) {
      console.log(id);
      return $http.get('/api/users/' + id);
    }
  };


}]);