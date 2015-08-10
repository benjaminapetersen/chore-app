'use strict';

angular.module('chore.lists')
  .controller('chore.lists.edit', [
    '$log',
    '$location',
    '$scope',
    '$routeParams',
    'lists',
    function($log, $location, $scope, $routeParams, lists) {
      $log.log('/lists/:lid');
      var lid = $routeParams.lid;

      lists.get(lid)
           .then(function(item) {
              angular.extend($scope, {
                item: item,
                save: function() {
                  item.updated_at = Date.now();
                  lists
                    .update(item)
                    .then(function() {
                      $location.path('lists');
                    });
                }
              });
      });
    }]);

