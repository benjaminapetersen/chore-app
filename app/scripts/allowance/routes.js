'use strict';

angular.module('chore.allowance', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/allowance', {
          templateUrl: 'scripts/allowance/views/list.html',
          controller: 'chore.allowance.list'
        });
    }
  ]);
