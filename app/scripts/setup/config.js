'use strict';

angular.module('chore.setup', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      // /setup/check
      //   - check if setup has run
      //   - if yes
      //     - redirect to /tasks
      //   - else
      //     - run the install service
      //       - create perms
      //       - create roles
      //       - redirect to setup/admin to create primary user
      // /setup/admin
      //   - create a user, give the 'admin' role
      // /setup/examples
      //   - install some example lists & tasks
      // /setup/finish
      //   - redirect user to /tasks?
      $routeProvider
        .when('/setup', {
          templateUrl: 'scripts/setup/views/start.html',
          controller: 'chore.setup.start'
        })
        .when('/setup/user', {
          templateUrl: 'scripts/setup/views/user.html',
          controller: 'chore.setup.user'
        })
        .when('/setup/examples', {
          templateUrl: 'scripts/setup/views/examples.html',
          controller: 'chore.setup.examples'
        })
        .when('/setup/finish', {
          templateUrl: 'scripts/setup/views/finish.html',
          controller: 'chore.setup.finish'
        });
    }
  ]);


