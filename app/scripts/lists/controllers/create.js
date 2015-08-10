'use strict';

angular.module('chore.lists')
  .controller('chore.lists.create', [
    '$log',
    '$location',
    '$scope',
    'lists',
    function($log, $location, $scope, lists) {
      $log.log('/lists/create');
      lists.all()
           .then(function(items) {
              // list is the new list item...
              var item = {};
              angular.extend($scope, {
                item: item,
                save: function() {
                  item.id = Date.now();
                  item.created_at = Date.now();
                  item.updated_at = Date.now();
                  lists
                    .create($scope.item)
                    .then(function() {
                      $scope.item = {};
                      $location.path('lists');
                    });
                }
              });
      });
    }]);
