'use strict';

angular.module('chore.roles')
  .controller('chore.roles.list', [
    '$log',
    '$location',
    '$scope',
    'roles',
    function($log, $location, $scope, roles) {
      $log.log('/roles/');
      roles.all()
           .then(function(items) {
              angular.extend($scope, {
                items: items,
                goTo: function(slug) {
                  $location.path(slug);
                }
              });
      });
    }]);
