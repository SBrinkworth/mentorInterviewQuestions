// INITILIZE APP
// ============================================================
var app = angular.module("app", [])

// CONFIG
// ============================================================
.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './home/homeTmpl.html',
      controller: 'mainCtrl'
    });

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
