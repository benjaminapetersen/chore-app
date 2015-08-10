'use strict';

angular.module('chore.tasks')
  .controller('chore.tasks.item', [
    '$log',
    '$location',
    '$q',
    '$routeParams',
    '$scope',
    'tasks',
    'users',
    'lists',
    function($log, $location, $q, $routeParams, $scope, tasks, users, lists ) {
      $log.log('/tasks/:tid');
      var tid = $routeParams.tid;

      $q.all([
        tasks.get(tid),
        users.all(),
        lists.all()
      ])
      .then(_.spread(function(taskItem, userItems, listItems) {
        angular.extend($scope, {
          items: [taskItem],
          lists: listItems,
          users: userItems,
          getUserById: function(id) {
            return _.find(userItems, function(item) {
              return item.id === id;
            });
          },
          getListById: function(id) {
            return _.find(listItems, function(item) {
              return item.id === id;
            });
          },
          goTo: function(slug) {
            $location.path(slug);
          }
        });

      }));
    }
  ]);
