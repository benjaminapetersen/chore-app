'use strict';

angular.module('chore.users')
  .controller('chore.users.list', [
    '$log',
    '$location',
    '$scope',
    'users',
    function($log, $location, $scope, users) {
      $log.log('/users/');
      users.all()
           .then(function(items) {
              angular.extend($scope, {
                items: items,
                goTo: function(slug) {
                  $location.path(slug);
                }
              });
      });
    }]);
