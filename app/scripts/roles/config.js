'use strict';

angular.module('chore.roles', [
  'chore.permissions'
])
.config([
  '$routeProvider',
  'permissionsProvider',
  'rolesProvider',
  function($routeProvider, permissionsProvider, roleProvider) {

    // admin user can configure roles then assign roles to users
    // admin user cannot configure permissions, these are built into
    // the system & defined by the various modules.
    var perms = ['view:roles', 'edit:roles', 'create:roles', 'remove:roles'];
    permissionsProvider.setup(perms);
    roleProvider.setup('admin', perms);
    // roleProvider.setup('user', perms[0]);
    // roleProvider.setup('anonymous', perms[0]);

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
