'use strict';

// oauth-token-cacher
angular.module('chore.auth')
  .directive('oauthTokenCacher', [
    function() {
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'scripts/auth/views/_oauth-token-cacher.html',
        scope: true,
        controller: [
          '$log',
          '$scope',
          function($log, $scope) {
            $log.log('oauth-token-cacher');

            angular.extend($scope, {
              url: url.join('')
            });

          }
        ],
        link: function($scope, $element, $attrs, ctrl) {
          ctrl.init($attrs);
        }
      };
    }
  ]);
