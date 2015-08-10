'use strict';

angular.module('chore')
  .directive('appToolbar', [
    function() {
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'scripts/main/views/_app-toolbar.html',
        scope: {
          title: '@title',  // string
          more: '@more'   // boolean
        },
        controller: [
          '$location',
          '$scope',
          '$timeout',
          '$window',
          'pubsub',
          function($location, $scope, $timeout, $window, pubsub) {
            // todo:
            // simply setting up the event system, will use later
            var events = [
              pubsub.subscribe('notification', function(options) {
                console.log('notification', options);
              }),
              pubsub.subscribe('foo', function(options) {
                console.log('foo', options);
              }),
            ]

            // clean up when page changes, zombie events, etc
            $scope.$on('$destroy', function() {
              _.each(events, function(evt) {
                evt && evt.unsubscribe();
              });
            })
            // exported functions should be attached to
            // this.api object
            this.api = {}
            // scope goes to the template
            angular.extend($scope, {
              showMore: function() {
                alert('more!');
              },
              back: function() {
                $window.history.back();
              }
            });
          }
        ],
        link: function($scope, $element, $attrs, ctrl) {
          // ctrl is the above controller function,
          // ctrl.api is the set of api functions the
          // controller exports to either its link, or
          // for other directive controllers to use.
        }
      }
    }
  ]);
