'use strict';


angular.module('chore.auth')
  .controller('chore.auth.google_callback', [
    '$log',
    '$routeParams',
    '$scope',
    function($log, $routeParams, $scope) {
      $log.log('/google_callback');
      $log.error('not impl. at this time.')
      angular.extend($scope, { });

    }]);
