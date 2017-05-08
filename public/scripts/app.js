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
        })
        .when('/register', {
          templateUrl: '/templates/register.html',
          controller: 'registerController',
          controllerAs: 'register'
        })
        .when('/login', {
          templateUrl: '/templates/login.html',
          controller: 'loginController',
          controllerAs: 'login'
        })
        .when('/users/:id', {
          templateUrl: '/templates/singleuser.html',
          controller: 'singleUserController',
          // controllerAs: 'singleusers'
        });


      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }]);
