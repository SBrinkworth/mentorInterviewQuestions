// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('testDir', function() {
  return {
    restrict: 'EA',
    template: "<h1>This should show up!</h1> {{thing}}",
    controller: function($scope) {
      $scope.thing = 'I am a thing!';
    }
  };
});
