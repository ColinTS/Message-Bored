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
}])
.service('TopicsService', ['$http', function ($http) {

  return {
    getTopics: function(){
      return $http.get('/api/topics');
    },
    getTopic: function(id) {
      return $http.get('/api/topics/' + id);
    },
    createTopic: function(newTopic){
      return $http.post('/api/topics', newTopic);
    }
  };
}])
.service('MessagesService', ['$http', function ($http) {

  return {
    getMessages: function(id){
      return $http.get('/api/messages/' + id);
    },
    createMessage: function(newMessage) {
      console.log(newMessage);
      return $http.post('/api/messages', newMessage);
    }
  };
}]);

