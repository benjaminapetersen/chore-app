'use strict';

angular.module('chore.tasks', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/tasks', {
          templateUrl: 'scripts/tasks/views/list.html',
          controller: 'chore.tasks.list'
        })
        .when('/tasks/create', {
          templateUrl: 'scripts/tasks/views/create.html',
          controller: 'chore.tasks.create'
        })
        .when('/tasks/:tid', {
          templateUrl: 'scripts/tasks/views/item.html',
          controller: 'chore.tasks.item'
        })
        .when('/tasks/:tid/edit', {
          templateUrl: 'scripts/tasks/views/edit.html',
          controller: 'chore.tasks.edit'
        })
        .when('/tasks/:tid/remove', {
          templateUrl: 'scripts/tasks/views/remove.html',
          controller: 'chore.tasks.remove'
        })
    }
  ]);
