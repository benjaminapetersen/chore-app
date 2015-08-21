'use strict';

angular.module('chore.users')
  .factory('currentUser', [
    '$log',
    '$q',
    'pubsub',
    'roles',
    'permissions',
    function($log, $q, pubsub, roles, permissions) {
      // what is actually needed?
      var currentUser = undefined,
          currentUserPerms = undefined,
          allRoles;

      // this may need to be reworked... is a little wonky here.
      roles
        .all()
        .then(function(roleItems) {
          allRoles = roleItems;
        });

      return {
        // assign a new current
        set: function(user) {
          currentUser = user;
          currentUserPerms = _.reduce(user.roles, function(memo, next, i, list) {
            memo = memo.concat(allRoles[next].permissions);
            return memo;
          }, []);
          pubsub.publish('user:current', user);
          return $q.when(currentUser);
        },
        // who is current
        get: function() {
          return $q.when(currentUser);
        },
        // roles
        // is('admin')
        // NOT RECOMMENDED..
        // roles are user defined.
        is: function() {
          console.error('will not implement');
        },
        // perms
        // can('view:all')
        // RECOMMENDED
        // permissions are code defined.
        can: function(perm) {
          console.log('current user can do', perm, _.includes(currentUserPerms, perm));
          return _.includes(currentUserPerms, perm);
        }
      }
    }
  ]);
