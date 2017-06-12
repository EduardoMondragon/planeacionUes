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
        titulo: "Normatividad Institucional",
        src: "http://www.ues.mx/docs/conocenos/normatividad/reglamentos/ReglamentoDePlaneacioonYEvaluacion2016.pdf",
        img: "/images/normatividad/abc.jpg"
    },
    {
        titulo: "Manual de Procedimientos",
        src: "pdf/normatividad/MPUES2014.pdf",
        img: "/images/normatividad/proc.jpg" 
    },
    {
        titulo: "Manual de Organización",
        src: "http://www.ues.mx/docs/conocenos/planeacion/MANUALDEORGANIZACION2016.pdf",
        img: "/images/normatividad/org.jpg"  
    },
    {
        titulo: "Reglamento de Planeación",
        src: "http://www.ues.mx/docs/conocenos/normatividad/reglamentos/ReglamentoDePlaneacioonYEvaluacion2016.pdf",
        img: "/images/normatividad/abc.jpg"
    }
];

});