'use strict';

angular.module('chore.users', [
  'chore.permissions',
  'chore.roles'
])
.config([
  '$routeProvider',
  'permissionsProvider',
  'rolesProvider',
  function($routeProvider, permissionsProvider, roleProvider) {

    var perms = ['view:users', 'edit:users', 'create:users', 'remove:users'];
    permissionsProvider.setup(perms);
    roleProvider.setup('admin', perms);
    roleProvider.setup('user', perms[0]);
    roleProvider.setup('anonymous', perms[0]);

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
      })
      .when('/users/:uid/activate', {
        templateUrl: 'scripts/users/views/activate.html',
        controller: 'chore.users.activate'
      });
  }
]);
