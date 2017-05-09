 /*jshint esversion: 6*/
angular.module('app')
.controller('addTopicController', ['$scope', 'TopicsService',
  function($scope, TopicsService){
    $scope.createTopic = function(newTopic) {
      var addTopic = {
        name: newTopic.name,
        created_by: newTopic.created_by
      };

      TopicsService.createTopic(addTopic)
        .then((topic) => {
          console.log(topic);
        });
    };
  }
]);