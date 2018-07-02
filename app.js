var  Athleteform= angular.module('Athleteform', [])
    Athleteform.controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.submit = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

}]);
