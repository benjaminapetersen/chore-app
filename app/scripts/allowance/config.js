'use strict';

angular.module('chore.allowance', [])
  .config([
    '$routeProvider',
    function($routeProvider) {

      // var perms = ['view:allowance', 'edit:allowance', 'create:allowance', 'remove:allowance'];
      // setup.permissions(perms);
      // setup.role('admin', perms);
      // setup.role('user', 'view:allowance');
      //setup.role('anonymous', 'view:lists');

      $routeProvider
        .when('/allowance', {
          templateUrl: 'scripts/allowance/views/list.html',
          controller: 'chore.allowance.list'
        });
    }
  ]);
