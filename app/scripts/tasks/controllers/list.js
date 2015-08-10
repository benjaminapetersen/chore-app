'use strict';
angular.module('chore.tasks')
  .controller('chore.tasks.list', [
    '$log',
    '$location',
    '$q',
    '$scope',
    'tasks',
    'users',
    'lists',
    function($log, $location, $q, $scope, tasks, users, lists) {
      $log.log('/tasks/');

      // at this point, this :
      // - list the tasks
      // - list the users associated
      // - list the lists associated
      // IS NOT yet a workable task list
      $q.all([
        tasks.all(),
        users.all(),
        lists.all()
      ])
      .then(_.spread(function(taskItems, userItems, listItems) {
        angular.extend($scope, {
          items: taskItems,
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

    }]);
