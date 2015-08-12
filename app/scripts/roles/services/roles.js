'use strict';

angular.module('chore.roles')
  .factory('roles', [
    '$log',
    '$q',
    'localStore',
    function($log, $q, storage) {
      var key = 'chore:roles';

      return {
        // get all
        all: function() {
          return storage.all(key);
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
        }
      };
    }
  ]);