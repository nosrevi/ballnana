'use strict';

angular.module('ballnanaApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
