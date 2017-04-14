// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainService) {

  // VARIABLES
  // ============================================================
  $scope.people = mainService.getData();

  // FUNCTIONS
  // ============================================================


});
