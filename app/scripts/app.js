'use strict';

angular.module('sasscompassApp', [
  'ngRoute'
])
  .config(function($routeProvider){
    $routeProvider
     .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/firstview', {
        templateUrl: 'views/firstview.html'
      })
      .when('/secondview', {
        templateUrl: 'views/secondview.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });