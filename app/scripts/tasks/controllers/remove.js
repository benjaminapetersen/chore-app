'use strict';

angular.module('chore.tasks')
  .controller('chore.tasks.remove', [
    '$log',
    '$location',
    '$routeParams',
    '$scope',
    'tasks',
    function($log, $location, $routeParams, $scope, tasks) {
      $log.log('/tasks/:tid');
      var tid = $routeParams.tid;
      tasks
        .get(tid)
        .then(function(item) {
          angular.extend($scope, {
            item: item,
            remove: function() {
              tasks
                .remove(item.id)
                .then(function() {
                  $location.path('/tasks');
                })
            },
            goTo: function(slug) {
              $location.path(slug);
            }
          });
        })
    }
  ]);
