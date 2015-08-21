'use strict';

angular.module('chore')
  .directive('appMenu', [
    function() {
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'scripts/main/views/_app-menu.html',
        scope: true,
        controller: [
          '$location',
          '$scope',
          '$timeout',
          '$window',
          'pubsub',
          function($location, $scope, $timeout, $window, pubsub) {

            // TODO: filter down the links based on the current user...
            var links = [
              {
                title: 'Lists',
                url: '#/lists',
                perm: 'view:lists'
              },
              {
                title: 'Tasks',
                url: '#/tasks',
                perm: 'view:tasks'
              },
              {
                title: 'Allowance',
                url: '#/allowance',
                perm: 'view:allowance'
              },
              {
                title: 'Users',
                url: '#/users',
                perm: 'view:users'
              },
              {
                title: 'Login',
                url: '#/login'
              },
              {
                title: 'Permsissions',
                url: '#/permissions',
                perm: 'view:permissions'
              },
              {
                title: 'Roles',
                url: '#/roles',
                perm: 'view:roles'
              }
            ]
            angular.extend($scope, {
              links: links
            });
          }
        ],
        link: function($scope, $element, $attrs, ctrl) {

        }
      };
    }
  ]);
