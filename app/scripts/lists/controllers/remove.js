'use strict';

angular.module('chore.lists')
  .controller('chore.lists.remove', [
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
                remove: function() {
                  lists
                    .remove(item.id)
                    .then(function() {
                      $location.path('/lists');
                    })
                },
                goTo: function(slug) {
                  $location.path(slug);
                }
              });
      });
    }]);

