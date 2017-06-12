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
    vm.reporterName = "Manuel D";
    vm.newsTitle = "RECIBE LA UNIVERSIDAD ESTATAL DE SONORA RECERTIFICACIÓN DEL SISTEMA DE GESTIÓN DE CALIDAD ISO 9001:2008";
    vm.newsText = "GCM GLOBAL CERTIFICATION MEXICO, organismo certificador.La recertificación para el Sistema de Gestión de Calidad de la Universidad Estatal de Sonora, se logró luego de la auditoría realizada por el organismo certificador GCM GLOBAL CERTIFICATION MEXICO, el cual recomendó a la institución educativa para refrendar la certificación de la norma ISO9001:2008.";
    vm.newsPublicationDate = new Date();

    vm.news = firebase.database().ref('blog/' +'NoticiaPrincipal/' + 'unicaNoticia');
    //public functions

    //private functions
});