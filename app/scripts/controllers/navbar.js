'use strict';

angular.module('sasscompassApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.links = [
      {
        name: 'link1',
        link: '#/firstview'
      },
      {
        name: 'link2',
        link: '#/secondview'
      },
      {
        name: 'link3',
        link: ''
      },
      {
        name: 'link4',
        link: ''
      }
    ];
  });
