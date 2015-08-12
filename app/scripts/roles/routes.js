'use strict';

angular.module('chore.roles', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/roles', {
          templateUrl: 'scripts/roles/views/list.html',
          controller: 'chore.roles.list'
        })
        .when('/roles/create', {
          templateUrl: 'scripts/roles/views/create.html',
          controller: 'chore.roles.create'
        })
        .when('/roles/:pid', {
          templateUrl: 'scripts/roles/views/item.html',
          controller: 'chore.roles.item'
        })
        .when('/roles/:pid/edit', {
          templateUrl: 'scripts/roles/views/edit.html',
          controller: 'chore.roles.edit'
        })
        .when('/roles/:pid/remove', {
          templateUrl: 'scripts/roles/views/remove.html',
          controller: 'chore.roles.remove'
        });
    }
  ]);
