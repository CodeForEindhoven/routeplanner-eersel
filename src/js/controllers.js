angular.module('app.controllers', ['ionic'])

.controller('opWegEerselCtrl', function($scope, $state, $stateParams) {
  $scope.setType = function() {
    console.log('Click!');
  };
  $scope.toList = function() {
      /* $location.path('/tab/newpost'); */   /* this variant doesnt work */
      $state.go("routeOverview");
    };
});
