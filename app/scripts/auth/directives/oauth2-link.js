'use strict';

angular.module('chore.auth')
  .directive('oauth2Link', [
    function() {
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'scripts/auth/views/_oauth2-link.html',
        scope: true,
        controller: [
          '$log',
          '$scope',
          function($log, $scope) {
            $log.log('oauth2-link');
            this.init = function($attrs) {
              var url = [];
              url.push($attrs.url+'?');
              if($attrs.responseType) {
                url.push('response_type='+$attrs.responseType+'&')
              }
              if($attrs.clientId) {
                url.push('client_id='+$attrs.clientId+'&')
              }
              if($attrs.redirectUri) {
                url.push('redirect_uri='+$attrs.redirectUri+'&')
              }
              if($attrs.scope) {
                url.push('scope='+$attrs.scope+'&')
              }
              if($attrs.state) {
                url.push('state='+$attrs.state+'&')
              }
              if($attrs.accessType) {
                url.push('access_type='+$attrs.accessType+'&')
              }
              if($attrs.approvalPrompt) {
                url.push('approval_prompt='+$attrs.approvalPrompt+'&')
              }
              if($attrs.loginHint) {
                url.push('login_hint='+$attrs.loginHint+'&')
              }
              if($attrs.includeGrantedScopes) {
                url.push('include_granted_scopes='+$attrs.includeGrantedScopes+'&')
              }

              angular.extend($scope, {
                url: url.join('')
              });
            }
          }
        ],
        link: function($scope, $element, $attrs, ctrl) {
          ctrl.init($attrs);
        }
      };
    }
  ]);
