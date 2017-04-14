// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/1'
    });
  };

  // OTHER FUNCTIONS
  // ============================================================


});
