'use strict';

angular.module('chore.lists', [
  'chore.permissions',
  'chore.roles'
])
.config([
  '$routeProvider',
  'permissionsProvider',
  'rolesProvider',
  function($routeProvider, permissionsProvider, roleProvider) {

    var perms = ['view:lists', 'edit:lists', 'create:lists', 'remove:lists'];
    permissionsProvider.setup(perms);
    roleProvider.setup('admin', perms);
    roleProvider.setup('user', perms[0]);
    roleProvider.setup('anonymous', perms[0]);

    $routeProvider
      .when('/lists', {
        templateUrl: 'scripts/lists/views/list.html',
        controller: 'chore.lists.list'
      })
      .when('/lists/create', {
        templateUrl: 'scripts/lists/views/edit.html',
        controller: 'chore.lists.create'
      })
      .when('/lists/:lid', {
        templateUrl: 'scripts/lists/views/item.html',
        controller: 'chore.lists.item'
      })
      .when('/lists/:lid/edit', {
        templateUrl: 'scripts/lists/views/edit.html',
        controller: 'chore.lists.edit'
      })
      .when('/lists/:lid/remove', {
        templateUrl: 'scripts/lists/views/remove.html',
        controller: 'chore.lists.remove'
      })
  }
]);
