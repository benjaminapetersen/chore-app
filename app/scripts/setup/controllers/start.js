
angular.module('chore.setup')
  .controller('chore.setup.start', [
    '$log',
    '$location',
    '$q',
    'crud',
    'permissions',
    'roles',
    function($log, $location, $q, crud, permissions, roles) {

      $q
        .when(
          crud
            .setStore('local')
            .setKey('chore:setup'))
        .then(function(setup) {
          setup
            .all()
            .then(function(setup) {
              // check setup.length against registered.length.
              // ensure each item has a key every time!
              if(setup && setup.length) {
                $location.path('/tasks');
              } else {

                // essentially this, BUT should be
                // a key for EVERY item registered w/setup
                // setup.create({
                //  permissions: true,
                //  roles: true,
                //  user: true
                // })
                //   $location.path('/setup/user');
              }
            });
        });
    }
  ]);
