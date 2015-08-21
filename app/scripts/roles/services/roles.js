'use strict';

angular.module('chore.roles')
  .provider('roles', [
    function() {
      var key = 'chore:roles';

      // there are three built-in roles that the
      // system will ensure exist.  these will be
      // updated each time the system starts up,
      // ensuring if something breaks they can be
      // fixed.
      var roles = {
        // 'superadmin' : [] ?
        'admin' : {
          readonly: true,
          permissions: []
        },
        'user' : {
          readonly: true,
          permissions: []
        },
        'anonymous' : {
          readonly: true,
          permissions: []
        }
      };

      this.setup = function(role, perms) {
        perms.length ?
          perms :
          (perms = [perms]);

        roles[role] ?
          (roles[role].permissions = roles[role].permissions.concat(perms)) :
          roles[role].permissions = perms;
      }

      this.$get = [
        '$log',
        '$q',
        'localStore',
        function($log, $q, storage) {
          return {
            // get all
            all: function(items) {
              return items ?
                     storage.all(key, items) :
                     storage.all(key);
            },
            create: function(item) {
              return storage.create(key, item);
            },
            update: function(item) {
              return storage.update(key, item);
            },
            get: function(id) {
              return storage.get(key, id);
            },
            remove: function(id) {
              return storage.remove(key, id);
            },
            clear: function() {
              return storage.clear(id);
            },
            // will set the system back to default roles.
            // this is handy if things get wonky. ALL user
            // defined roles will be wiped out.
            _reset: function() {
              this.all(roles);
            },
            // internal method, intended only for use by
            // the system! this method will intentionally clobber
            // roles that are owned by the system that a user may
            // have meddled with, however it should ignore roles
            // that are user defined.
            // currently system roles are:
            // admin, user, anonymous.
            // system roles should be marked by readonly: true
            _compile: function() {
              var self = this,
                  current = this.all();
              this
                .all()
                .then(function(currentRoles) {
                  _.each(roles, function(value, key, i) {
                    currentRoles[key] = roles[key];
                  });
                  self.all(currentRoles);
                })
            }
          };
        }
      ];
    }
  ])
  .run([
    'roles',
    function(roles) {
      // once the run phase is done, all permissions should be
      // registered & the permissions module can save them.
      roles._compile();
    }
  ])

