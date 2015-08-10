'use strict';

angular.module('chore.users')
  .controller('chore.users.edit', [
    '$log',
    '$location',
    '$routeParams',
    '$scope',
    'users',
    function($log, $location, $routeParams, $scope, users) {
      $log.log('/users/:uid');
      var uid = $routeParams.uid;
      users
        .get(uid)
        .then(function(item) {
          angular.extend($scope, {
            item: item,
            update: function() {
              console.log('hello?', item);
              item.updated_at = Date.now();
              users
                .update(item)
                .then(function() {
                  $location.path('/users');
                })
            }
          });
        });


    }]);
