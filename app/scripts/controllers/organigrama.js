'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:OrganigramaCtrl
 * @description
 * # OrganigramaCtrl
 * Controller of the pApp
 */

angular.module('pApp')
.controller('OrganigramaCtrl', function() {

var vm = this;
 vm.switchSecondRow = true; 
 
 $(document).ready(function () { //  this function send top page after load
    $(window).scrollTop(0);
}); 

//public functions

//private functions


/*
====================
    id = secondRow
====================
*/
window.onscroll = function(){imagesAnimated()};
        var flag = true;
        function imagesAnimated(){
           
            if(document.body.scrollTop > 340 || document.documentElement.scrollTop
            > 340){
                /*carlos*/
                document.getElementById("carlos").className = "figure";
                /*jesus*/
                document.getElementById("jesus").className = "figure";
                /*celeste*/
                document.getElementById("celeste").className = "figure";
                /*rosario*/
                document.getElementById("rosario").className = "animated imgOrgIn  figure visibilityVisible";
                document.getElementById("rosarioText").className = "visibilityVisible";
                /*dyke*/
                document.getElementById("dyke").className = "animated imgOrgIn  figure visibilityVisible";
                document.getElementById("dykeText").className = "visibilityVisible";
                /*desconocido*/
                document.getElementById("unknow").className = "animated imgOrgIn  figure visibilityVisible";
                document.getElementById("unknowText").className = "visibilityVisible";
                flag = false;
            } else{
                if(!flag){
                    /*carlos*/
                    document.getElementById("carlos").className = "animated imgOrgIn  figure";
                    /*jesus*/
                    document.getElementById("jesus").className = "animated imgOrgIn  figure";
                    /*celeste*/
                    document.getElementById("celeste").className = "animated imgOrgIn  figure";
                    /*rosario*/   
                    document.getElementById("rosario").className = "animated imgOrgOut  figure";
                    /*dyke*/ 
                    document.getElementById("dyke").className = "animated imgOrgOut  figure";
                    /*unknow*/
                    document.getElementById("unknow").className = "animated imgOrgOut  figure";   
                }   
            } 
        }        
});