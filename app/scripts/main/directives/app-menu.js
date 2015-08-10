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
            var links = [
              {
                title: 'Lists',
                url: '#/lists'
              },
              {
                title: 'Tasks',
                url: '#/tasks'
              },
              {
                title: 'Allowance',
                url: '#/allowance'
              },
              {
                title: 'Users',
                url: '#/users'
              },
              {
                title: 'Login',
                url: '#/login'
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
