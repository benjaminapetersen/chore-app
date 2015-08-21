'use strict';

angular.module('chore.users')
  .controller('chore.users.edit', [
    '$log',
    '$location',
    '$q',
    '$routeParams',
    '$scope',
    'users',
    'roles',
    function($log, $location, $q, $routeParams, $scope, users, roles) {
      $log.log('/users/:uid');
      var uid = $routeParams.uid;

      $q
        .all([
          users
            .get(uid),
          roles
            .all()
        ])
        .then(_.spread(function(user, roles) {
          var selectedRoles = user.roles;

          angular.extend($scope, {
            item: user,
            roles: _.keys(roles),
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
            update: function() {
              user.updated_at = Date.now();
              user.roles = selectedRoles;
              users
                .update(user)
                .then(function() {
                  $location.path('/users');
                })
            }
          });

        }));
    }]);
