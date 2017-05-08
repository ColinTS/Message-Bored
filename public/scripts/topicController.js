 /*jshint esversion: 6*/
angular.module('app')
.controller('topicController', ['$scope', 'TopicsService',
    function($scope, TopicsService){
          TopicsService.getTopics()
            .then((res) => {
              $scope.res = res.data;
            });

  }
]);