 /*jshint esversion: 6*/
angular.module('app')
.controller('singleTopicController', ['$scope', 'TopicsService', 'MessagesService',
    function($scope, TopicsService, MessagesService){
          TopicsService.getTopic(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
            .then((res) => {
              $scope.topic = res.data;
          });
          MessagesService.getMessages(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
            .then((res) => {
              $scope.messages = res.data;
          });
          $scope.createMessage = function(newMessage) {
            var addMessage = {
              body: newMessage.body,
              author_id: newMessage.author_id,
              topic_id: window.location.href.slice(window.location.href.lastIndexOf('/')+1)
            };
            MessagesService.createMessage(addMessage)
              .then((message) => {
                console.log(message);
            }).then(() => {
                MessagesService.getMessages(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
                  .then((res) => {
                  $scope.messages = res.data;
                  });
                });
           };

    }
]);