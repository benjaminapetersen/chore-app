'use strict';

angular.module('chore.permissions', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/permissions', {
          templateUrl: 'scripts/permissions/views/list.html',
          controller: 'chore.permissions.list'
        })
        .when('/permissions/create', {
          templateUrl: 'scripts/permissions/views/create.html',
          controller: 'chore.permissions.create'
        })
        .when('/permissions/:pid', {
          templateUrl: 'scripts/permissions/views/item.html',
          controller: 'chore.permissions.item'
        })
        .when('/permissions/:pid/edit', {
          templateUrl: 'scripts/permissions/views/edit.html',
          controller: 'chore.permissions.edit'
        })
        .when('/permissions/:pid/remove', {
          templateUrl: 'scripts/permissions/views/remove.html',
          controller: 'chore.permissions.remove'
        });
    }
  ]);
