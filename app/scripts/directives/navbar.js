'use strict';

angular.module('sasscompassApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/templates/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
