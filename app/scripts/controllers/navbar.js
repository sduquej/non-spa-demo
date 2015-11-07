'use strict';

/**
 * @ngdoc function
 * @name spaDemoApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the spaDemoApp
 */
angular.module('spaDemoApp')
  .controller('NavbarCtrl', ['$location', function ($location) {
    var vm = this;
  	this.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  }]);
