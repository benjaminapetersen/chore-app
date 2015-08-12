'use strict';

angular.module('chore.permissions')
  .controller('chore.permissions.list', [
    '$log',
    '$location',
    '$scope',
    'permissions',
    function($log, $location, $scope, permissions) {
      $log.log('/permissions/');
      permissions.all()
           .then(function(items) {
              var item = {};
              angular.extend($scope, {
                item: item,
                items: items,
                add: function(slug) {
                  item.id = Date.now();
                  item.created_at = Date.now();
                  item.updated_at = Date.now();
                  permissions
                    .create($scope.item)
                    .then(function() {
                      items.push(item);
                      $scope.item = {};
                    });
                }
              });
      });
    }]);
