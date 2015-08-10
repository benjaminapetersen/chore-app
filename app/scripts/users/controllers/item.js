'use strict';

angular.module('chore.users')
  .controller('chore.users.item', [
    '$log',
    '$routeParams',
    '$scope',
    'users',
    function($log, $routeParams, $scope, users) {
      $log.log('/users/:uid');
      var uid = $routeParams.uid;
      users
        .get(uid)
        .then(function(item) {
          angular.extend($scope, {
            items: [item]
          });
        });


    }]);




