 /*jshint esversion: 6*/
angular.module('app')
.controller('singleTopicController', ['$scope', 'TopicsService',
    function($scope, TopicsService){
          TopicsService.getTopic(window.location.href.slice(window.location.href.lastIndexOf('/')+1))
            .then((res) => {
              $scope.topic = res.data;
              console.log(res);
          });
  }
]);