angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(resp) {
       // $scope.link = resp ;
        $location.url('/links');
      })
  };

  $scope.links = function() {
    $location.url('/links')
  }
});
