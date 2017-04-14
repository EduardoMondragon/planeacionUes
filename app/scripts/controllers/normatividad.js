'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:NormatividadCtrl
 * @description
 * # NormatividadCtrl
 * Controller of the pApp
 */
angular.module('pApp')
.controller('NormatividadCtrl', function(){
var vm = this;

vm.pdf = [
    {
        titulo: "Reglamento de Planeación",
        src: "http://www.ues.mx/docs/conocenos/normatividad/reglamentos/ReglamentoDePlaneacioonYEvaluacion2016.pdf",
        img: "/images/normatividad/1.png"
    },
    {
        titulo: "Manual de Procedimientos",
        src: "http://www.ues.mx/docs/conocenos/normatividad/Manual%20de%20Procedimientos%20de%20la%20Universidad%20Estatal%20de%20Sonora%20(UES)%202014.pdf",
        img: "/images/normatividad/4.png" 
    },
    {
        titulo: "Manual de Organización",
        src: "http://www.ues.mx/docs/conocenos/planeacion/MANUALDEORGANIZACION2016.pdf",
        img: "/images/normatividad/3.png"  
    }
];

});