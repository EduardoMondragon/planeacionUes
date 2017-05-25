'use strict';

/**
 * @ngdoc function
 * @name pApp.controller:BlogCtrl
 * @description 
 * # BlogCtrl
 * Controller of the pApp
 */
angular.module('pApp')
  .controller('BlogCtrl', function () {
   var vm = this;
   vm.title = "RECIBE LA UNIVERSIDAD ESTATAL DE SONORA RECERTIFICACIÓN DEL SISTEMA DE GESTIÓN DE CALIDAD ISO 9001:2008";
    $(document).ready(function () {
        $(window).scrollTop(0);
    }); 

    vm.wrapper = '/images/inicio/slide/u3.jpg';
    vm.wrapper2 = '/images/inicio/slide/u1.jpg';
});