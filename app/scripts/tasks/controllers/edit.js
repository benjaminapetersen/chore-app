'use strict';

angular.module('chore.tasks')
  .controller('chore.tasks.edit', [
    '$log',
    '$location',
    '$q',
    '$routeParams',
    '$scope',
    'tasks',
    'users',
    'lists',
    function($log, $location, $q, $routeParams, $scope, tasks, users, lists) {
      $log.log('/tasks/create');
      var tid = $routeParams.tid;


      $q.all([
        tasks.get(tid),
        users.all(),
        lists.all()
      ])
      .then(_.spread(function(taskItem, userItems, listItems) {
        var selectedUsers = taskItem.assigned_to,
            selectedLists = taskItem.lists;

        angular.extend($scope, {
          item: taskItem,
          users: userItems,
          lists: listItems,
          // have been set on the task
          selectedUsers: selectedUsers,
          selectedLists: selectedLists,
          toggle: function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
              list.splice(idx, 1);
            } else {
              list.push(item);
            }
          },
          exists: function (item, list) {
            return list.indexOf(item) > -1;
          },
          save: function() {
            taskItem.updated_at = Date.now();
            taskItem.lists = selectedLists;
            taskItem.assigned_to = selectedUsers;
            tasks
              .update(taskItem)
              .then(function() {
                $location.path('tasks');
              });
          }
          });
      }));
    }
  ]);

