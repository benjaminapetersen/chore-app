'use strict';

angular.module('chore.tasks', [
  'chore.permissions',
  'chore.roles'
])
.config([
  '$routeProvider',
  'permissionsProvider',
  'rolesProvider',
  function($routeProvider, permissionsProvider, roleProvider) {

    var perms = ['view:tasks', 'edit:tasks', 'create:tasks', 'remove:tasks', 'do:tasks'];
    permissionsProvider.setup(perms);
    roleProvider.setup('admin', perms);
    roleProvider.setup('user', [perms[0], perms[4]]);
    roleProvider.setup('anonymous', perms[0]);

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
