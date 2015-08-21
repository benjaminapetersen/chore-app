'use strict';
//
//
//
//
//
//
//
//
angular.module('chore.roles')
  .provider('setup', [
    function() {
      var permissions: function(permList) {

        },
        role: function(role, permList) {

        };


      this.permissions = permissions;
      this.role = role;

      // as a service?
      this.$get = [
        '$log',
        function($log) {
          return {
            permissions: permissions,
            role: role
          }
        }
      ];

    }
  ]);
