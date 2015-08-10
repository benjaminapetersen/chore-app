'use strict';

angular.module('chore.auth')
  .controller('chore.auth.login', [
    '$log',
    '$routeParams',
    '$scope',
    function($log, $routeParams, $scope) {
      $log.log('/login');

      angular.extend($scope, { });

    }]);
