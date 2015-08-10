'use strict';

angular.module('chore.dashboard', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/dashboard', {
          templateUrl: 'scripts/dashboard/views/dashboard.html',
          controller: 'chore.dashboard.dashboard'
        });
    }
  ]);
