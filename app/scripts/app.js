'use strict';

/**
 * @ngdoc overview
 * @name spaDemoApp
 * @description
 * # spaDemoApp
 *
 * Main module of the application.
 */
angular
  .module('spaDemoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
      })
      .when('/page2', {
        templateUrl: 'views/page2.html',
        controller: 'SecondPageCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
