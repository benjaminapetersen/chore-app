'use strict';

angular.module('chore.permissions')
  .provider('permissions', [
    function() {
      var key = 'chore:permissions';
      var perms = [];

      this.setup = function(list) {
        // $q isn't a provider
        // localStore isn't a provider
        // therefore, .setup() can't really
        // work here, because storage is
        // designed around $q.
        perms = perms.concat(list);
      };

      this.$get = [
        '$log',
        '$q',
        'localStore',
        function($log, $q, storage) {
          return {
            // get or set all.
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
            // internal method, intended only for use by
            // the system!
            _compile: function() {
              this.all(perms);
            }
          };
        }
      ]
    }
  ])
  .run([
    'permissions',
    function(permissions) {
      // once the run phase is done, all permissions should be
      // registered & the permissions module can save them.
      permissions._compile();
    }
  ])
