'use strict';
/**
 * @ngdoc function
 * @name pApp.controller:BlogAdministratorCtrl
 * @description 
 * # BlogAdministratorCtrl
 * Controller of the pApp
 */
angular.module('pApp')
.controller('BlogAdministratorCtrl', function ($scope) {
    var vm = this;
    //BLOCK DECLARATION
    vm.switchButton = true;   
    vm.switch = true;

    //PUBLIC FUNCTIONS
    vm.FocusSwitch = FocusSwitch;
    vm.addNewsImportant = addNewsImportant;
    vm.addNewsSimple = addNewsSimple;

    //========================================================
    //          * AFTER PAGE LOAD buttons switch *           //
    //========================================================
    $(document).ready(function(){                            //
        $("#left").css("border-bottom","3px solid #faa636"); //
        $("#left").css("color","#95a5a6");                   //
    });                                                      //
    //========================================================


    //========================================================
    //               * UPLOAD IMAGE PRINCIPAL*               //
    //========================================================                     
    $('#upload').on('click',function(){                      //
        $('#inpImage').click();                              //
    })                                                       //
    //========================================================
    

    //========================================================
    //                  * UPLOAD IMAGE SIMPLE*               //
    //========================================================                     
    $('#uploadSimple').on('click',function(){                //
        $('#inpImageSimple').click();                        //
    })                                                       //
    //========================================================

    //PRIVATE FUNCTIONS
    function FocusSwitch(){
        if(vm.switchButton  == true){
            $("#left").css("border-bottom","3px solid #faa636");
            $("#left").css("color","#95a5a6");
            $("#right").css("border-bottom","3px solid transparent");
            $("#right").css("color","#2c3e50");
        }else{
            $("#right").css("border-bottom","3px solid #faa636");
            $("#right").css("color","#95a5a6");
            $("#left").css("border-bottom","3px solid transparent");
            $("#left").css("color","#2c3e50");
        }
    }//end FocusSwitch()

    function addNewsImportant(){
        //blogFire.addNews(vm.newsTitle, vm.newsImage, vm.autorName, vm.newsText);
         var news = firebase.database().ref('blog/' +'NoticiaPrincipal/' + 'unicaNoticia');
        news.update({
            image: vm.newsImage,
            title: vm.newsTitle,
            author: vm.autorName,
            text: vm.newsText
        });
        swal({
            title: "Noticia Guardada !",
            text: "Puedes comprobar tu noticia en la sección Blog",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function addNewsSimple(){
        //blogFire.addNews(vm.newsTitle, vm.newsImage, vm.autorName, vm.newsText);
         var newsSimple = firebase.database().ref('blog/' +'NoticiaTradicional/' + vm.newsTitleSimple);
        newsSimple.update({
            image: vm.newsImageSimple,
            title: vm.newsTitleSimple,
            author: vm.autorNameSimple,
            text: vm.newsTextSimple
        });
        swal({
            title: "Noticia Guardada !",
            text: "Puedes comprobar tu noticia en la sección Blog",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    }

    function readFile() {
  
        if (this.files && this.files[0]) {
            var FR= new FileReader();
            FR.addEventListener("load", function(e, imageConverted) {

                document.getElementById("img").src = e.target.result;
                document.getElementById("imgModal").src = e.target.result;
                imageConverted = document.getElementById("b64").innerHTML = e.target.result;
                vm.newsImage = imageConverted;
            }); 
            FR.readAsDataURL( this.files[0] );
        }
        $('.imgSelect').css("display","block");
        $('.imgSelect').addClass("animated imgBlog");
    }
    document.getElementById("inpImage").addEventListener("change", readFile);
 
    function readSimpleFile() {
  
        if (this.files && this.files[0]) {
            var FR= new FileReader();
            FR.addEventListener("load", function(e, imageConverted) {

                document.getElementById("imgSimple").src = e.target.result;
                document.getElementById("imgModalSimple").src = e.target.result;
                imageConverted = document.getElementById("b64Simple").innerHTML = e.target.result;
                vm.newsImageSimple = imageConverted;
            }); 
            FR.readAsDataURL( this.files[0] );
        }
        $('.imgSelectSimple').css("display","block");
        $('.imgSelectSimple').addClass("animated imgBlog");
    }
    document.getElementById("inpImageSimple").addEventListener("change", readSimpleFile);
});