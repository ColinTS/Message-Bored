/* globals angular */

angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html'
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'userController',
          controllerAs: 'users'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }]);
  // .controller('userController', ['$scope',
  //   function($scope){
  //     $scope.testScope = "hello scope";
  //     this.controllerAsTest = "hello controllerAs";
  //   }
  // ]);