angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
     .then(function(data){
       console.log(data);
       $scope.data.links = data;
    })
  };

  $scope.site = function(link) {
    console.log($location);
    $location.url(link.code)
  }

  $scope.shorten = function() {
    $location.url('/shorten')
  }

  console.log($location.path)

  $scope.getLinks();
});
