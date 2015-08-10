'use strict';

angular.module('chore.auth', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'scripts/auth/views/login.html',
          controller: 'chore.auth.login'
        })
        .when('/logout', {
          templateUrl: 'scripts/auth/views/logout.html',
          controller: 'chore.auth.logout'
        })
        // ideally, would use a route for handling the callback.  meh.
        // .when('/auth_google_callback', {
        //   templateUrl: 'scripts/auth/views/auth_google_callback.html',
        //   controller: 'chore.auth.google_callback'
        // })
        // eventually may have to handle sign-ups!
        // .when('/signup', {
        //   templateUrl: 'scripts/auth/views/signup.html',
        //   controller: 'chore.auth.signup'
        // })
    }
  ]);
