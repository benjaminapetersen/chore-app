'use strict';

angular.module('chore', [
    // angular core libs
    'ngRoute',
    // vendor libs
    'ngMaterial',
    'pubsub',
    // app modules
    'chore.setup',
    'chore.storage',
    'chore.auth',
    'chore.allowance',
    'chore.lists',
    'chore.tasks',
    'chore.dashboard',
    'chore.users',
    'chore.permissions',
    'chore.roles',
    'chore.env'
    // filters
    // routes..?
    // directives
])
// initial routing
.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {

    // can use, IF server side will direct all requests to index
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        redirectTo: '/setup'
      });
  }
])
// angular material theme
.config([
    '$mdThemingProvider',
    function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('green');
    }
])
;
