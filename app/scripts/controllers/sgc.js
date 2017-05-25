'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ScgCtrl
 * @description
 * # ScgCtrl
 * Controller of the testApp
 */
angular.module('pApp')
.controller('ScgCtrl', function(){
    var vm = this;

    $(document).ready(function () { //  this function send top page after load
        $(window).scrollTop(0);
    }); 

     window.onscroll = function(){sgc()}; //  this function  active all scroll animation's 
        var firstTime = true;
        function sgc(){
             
            /*
            ====================
                   MISION
            ====================
            */
            if(document.body.scrollTop > 200 || document.documentElement.scrollTop
            > 200){
                document.getElementById("imgMision").className = "animated inImgVision visibilityVisible sgcImages";
                document.getElementById("textMision").className = "col-xs-6 animated inRightTextVision visibilityVisible sgcTextImages colXs6Responsive";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("imgMision").className = "animated outImgVision";
                    document.getElementById("textMision").className = "col-xs-6 animated outTextVision";					
                }
            }
            /*
            ====================
                  VISION
            ====================
            */
            if(document.body.scrollTop > 550 || document.documentElement.scrollTop
            > 550){
                document.getElementById("imgVision").className = "animated inImgVision visibilityVisible sgcImages";
                document.getElementById("textVision").className = "col-xs-6 animated inTextVision visibilityVisible sgcTextImages colXs6Responsive";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("imgVision").className = "animated outImgVision";
                    document.getElementById("textVision").className = "col-xs-6 animated outTextVision";					
                }
            }
            /*
            ====================
            POLITICA DE CALIDAD
            ====================
            */
            if(document.body.scrollTop > 900 || document.documentElement.scrollTop
            > 900){
                document.getElementById("imgPoliticaDeCalidad").className = "animated inImgVision visibilityVisible sgcImages";
                document.getElementById("textPoliticaDeCalidad").className = "col-xs-6 animated inRightTextVision visibilityVisible sgcTextImages colXs6Responsive";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("imgPoliticaDeCalidad").className = "animated outImgVision";
                    document.getElementById("textPoliticaDeCalidad").className = "col-xs-6 animated outTextVision";					
                }
            }
            /*
            ====================
            OBJETIVOS DE CALIDAD
            ====================
            */
            if(document.body.scrollTop > 1300 || document.documentElement.scrollTop
            > 1300){
                document.getElementById("imgObjetivosDeCalidad").className = "animated inImgVision visibilityVisible sgcImages";
                document.getElementById("textObjetivosDeCalidad").className = "col-xs-6 animated inTextVision visibilityVisible sgcTextImages colXs6Responsive";
                firstTime = false;
            } else{
                if(!firstTime){
                    document.getElementById("imgObjetivosDeCalidad").className = "animated outImgVision";
                    document.getElementById("textObjetivosDeCalidad").className = "col-xs-6 animated outTextVision";					
                }
            }
        }
 
});
	
   