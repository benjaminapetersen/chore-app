'use strict';

angular.module('chore.tasks')
  .controller('chore.tasks.create', [
    '$log',
    '$location',
    '$q',
    '$scope',
    'tasks',
    'users',
    'lists',
    function($log, $location, $q, $scope, tasks, users, lists) {
      $log.log('/tasks/create');


      $q.all([
        tasks.all(),
        users.all(),
        lists.all()
      ])
      .then(_.spread(function(taskItems, userItems, listItems) {
        var item = {
              points: 1
            },
            selectedUsers = [],
            selectedLists = [];

        angular.extend($scope, {
          item: item,
          users: userItems,
          lists: listItems,
          // as items are toggled...
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
          create: function() {
            item.id = Date.now();
            item.created_at = Date.now();
            item.updated_at = Date.now();
            item.lists = selectedLists;
            item.assigned_to = selectedUsers;
            tasks
              .create($scope.item)
              .then(function() {
                $scope.item = {};
                $location.path('tasks');
              });
          }
          });
      }));
    }
  ]);

