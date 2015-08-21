'use strict';

angular.module('chore.users')
  .controller('chore.users.activate', [
    '$log',
    '$location',
    '$routeParams',
    '$scope',
    'users',
    'currentUser',
    function($log, $location, $routeParams, $scope, users, currentUser) {

      users
        .get($routeParams.uid)
        .then(function(user) {
          currentUser
            .set(user)
            .then(function(currUser) {
              angular.extend($scope, {
                user: currUser,
                goTo: function(slug) {
                  $location.path(slug);
                }
              })
            })
        })
    }
  ])
