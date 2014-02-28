'use strict';

angular.module('ballnanaApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/getCourts').success(function(courts) {
      $scope.courts = courts;
    });
    $scope.map = {
      center: {
        latitude: 32,
        longitude: -96
      },
      options: {
        panControl: false,
        streetViewControl: false
      },
      markers:[
        {
          icon: '/images/hoop.jpg',
          latitude: 32,
          longitude: -96,
          showWindow: false,
          title: 'haha'   
        },
        {
          icon: '/images/hoop.jpg',
          latitude: 32,
          longitude: -96.055,
          showWindow: false,
          title: 'haha2'   
        }
      ],
      zoom: 12,
      doClusterMarkers: true
    };
  });
