'use strict';

angular.module('chore.users')
  .controller('chore.users.create', [
    '$log',
    '$location',
    '$q',
    '$routeParams',
    '$scope',
    'users',
    'roles',
    function($log, $location, $q, $routeParams, $scope, users, roles) {
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

      $q
        .all([
          users
            .all(),
          roles
            .all()
        ])
        .then(_.spread(function(userItems, roleItems) {
          var selectedRoles = [];

          angular.extend($scope, {
            item: newUser,
            roles: _.keys(roleItems),
            selectedRoles: selectedRoles,
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
              newUser.id = Date.now();
              newUser.updated_at = Date.now();
              newUser.roles = selectedRoles;
              users
                .create(newUser)
                .then(function(item) {
                  $location.path('/users');
                });
            }
          });

        }));

}]);
