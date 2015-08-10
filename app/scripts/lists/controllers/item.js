'use strict';

angular.module('chore.lists')
  .controller('chore.lists.item', [
    '$log',
    '$scope',
    '$routeParams',
    'lists',
    function($log, $scope, $routeParams, lists) {
      $log.log('/lists/:lid');
      var lid = $routeParams.lid;

      lists.get(lid)
           .then(function(items) {
            console.log('item', lid, items);
              angular.extend($scope, {
                items: [items]
              });
      });
    }]);
