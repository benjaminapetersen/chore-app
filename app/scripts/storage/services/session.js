'use strict';

angular.module('chore.storage')
  .factory('sessionStorage', [
    '$log',
    function($log) {
      var storage = window.sessionStorage;

      return {
        save: function(key, value) {
          //return $.when(storage.setItem(key, value));
        },
        get: function(key) {
          //return $.when(storage.getItem(key));
        },
        remove: function(key) {
          //return $.when(storage.removeItem(key));
        }
      }
    }
  ]);

