'use strict';

angular.module('chore.users')
  .controller('chore.users.create', [
    '$log',
    '$location',
    '$routeParams',
    '$scope',
    'users',
    function($log, $location, $routeParams, $scope, users) {
      $log.log('/users/:uid');

      var newUser = {
          name: {
            first: '',
            last: '',
            middle: ''
          },
          img: '',
          birthday: '',
          age: '',
          email: '',
          tags: [],
          roles: []
        };
      // users.get(uid).then(function() {})
      users
        .all()
        .then(function() {
          angular.extend($scope, {
            item: newUser,
            save: function() {
              newUser.id = Date.now();
              newUser.updated_at = Date.now();
              users
                .create(newUser)
                .then(function(item) {
                  $location.path('/users');
                });
            }
          });
        });
    }]);
