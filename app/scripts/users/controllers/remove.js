'use strict';

angular.module('chore.users')
  .controller('chore.users.remove', [
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
          // TODO: updated_at change!
          angular.extend($scope, {
            item: item,
            remove: function() {
              users
                .remove(item.id)
                .then(function() {
                  $location.path('/users');
                })
            },
            goTo: function(slug) {
              $location.path(slug);
            }

          });
        });


    }]);
