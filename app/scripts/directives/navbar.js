'use strict';

angular.module('sasscompassApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/partials/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
