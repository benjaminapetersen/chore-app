'use strict';

angular.module('chore.roles')
  .controller('chore.roles.create', [
    '$log',
    '$q',
    '$scope',
    'crud',
    'permissions',
    function($log, $q, $scope, crud, permissions) {

      $q.all([
        permissions
          .all(),
        crud
          .setStore('local')
          .setKey('chore:roles')
      ])
      .then(_.spread(function(permItems, roles) {
        var item = {
              title: '',
              description: '',
              permissions: []
            },
            selectedPerms = [];

        angular.extend($scope, {
          item: item,
          permissions: permItems,
          selectedPerms: selectedPerms,
          // TODO: refactor out into main/services/formSelectorUtils
          toggle: function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
              list.splice(idx, 1);
            } else {
              list.push(item);
            }
          },
          exists: function (item, list) {
            return list.indexOf(item) > -1;
          },
          create: function() {
            item.id = Date.now();
            item.created_at = Date.now();
            item.updated_at = Date.now();
            item.permissions = selectedPerms;
            roles
              .create($scope.item)
              .then(function() {
                $location.path('/roles');
              })
          }
        })
      }));

    }
  ]);
