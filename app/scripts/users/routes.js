'use strict';

angular.module('chore.users', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/users', {
          templateUrl: 'scripts/users/views/list.html',
          controller: 'chore.users.list'
        })
        .when('/users/create', {
          templateUrl: 'scripts/users/views/create.html',
          controller: 'chore.users.create'
        })
        .when('/users/:uid', {
          templateUrl: 'scripts/users/views/item.html',
          controller: 'chore.users.item'
        })
        .when('/users/:uid/edit', {
          templateUrl: 'scripts/users/views/edit.html',
          controller: 'chore.users.edit'
        })
        .when('/users/:uid/remove', {
          templateUrl: 'scripts/users/views/remove.html',
          controller: 'chore.users.remove'
        });
    }
  ]);
