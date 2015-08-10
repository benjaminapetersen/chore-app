'use strict';

angular.module('chore.lists')
  .controller('chore.lists.list', [
    '$log',
    '$location',
    '$scope',
    'lists',
    function($log, $location, $scope, lists) {
      $log.log('/lists/');
      lists.all()
           .then(function(items) {
              angular.extend($scope, {
                items: items,
                goTo: function(slug) {
                  $location.path(slug);
                }
              });
      });
    }]);
