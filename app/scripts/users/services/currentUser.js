'use strict';

angular.module('chore.users')
  .factory('currentUser', [
    '$log',
    function($log) {
      var currentUser = undefined,
          currentUserRoles = undefined,
          currentUserpPerms = undefined;

      return {
        // assign a new current
        set: function(user) {
          // todo: lookup perms & roles, cache them & make it easy to search...
        },
        // who is current
        get: function() {
          return currentUser;
        },
        // roles
        // is('admin')
        is: function() {

        },
        // perms
        // can('view:all')
        can: function() {

        }
      }
    }
  ]);
