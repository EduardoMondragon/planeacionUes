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
    //BLOCK DECLARATION
    vm.wrapper = '/images/inicio/slide/u3.jpg';
    vm.reporterName = "LALO";
    vm.newsTitle = "Soy Titulo";
    vm.newsText = "texto texto texto";
    vm.newsPublicationDate = new Date();

    vm.news = firebase.database().ref('blog/' +'NoticiaPrincipal/' + 'unicaNoticia');
    //public functions

    //private functions
});