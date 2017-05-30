'use strict';

/**
 * @ngdoc overview
 * @name pApp
 * @description
 * # pApp
 *
 * Main module of the application.
 */
angular
  .module('pApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
     $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {/*INICIO*/
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/organigrama',{/*ORGANIGRAMA*/
        templateUrl: 'views/organigrama.html',
        controller: 'OrganigramaCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/directorio',{/*DIRECTORIO*/
        templateUrl: 'views/directorio.html'
      })
      .when('/sgc',{/*SGC*/
        templateUrl: 'views/sgc.html',
        controller: 'ScgCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/normatividad',{/*NORMATIVIDAD*/
        templateUrl: 'views/normatividad.html',
        controller: 'NormatividadCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/blog',{/*Blog*/
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/blogAdministrator',{/*Blog Administrador*/
        templateUrl: 'views/blogAdministrator.html',
        controller: 'BlogAdministratorCtrl',
        controllerAs: 'vm',
        resolve: { onLoad: scrollTop }
      })
      .when('/organismosAcreditadores',{/*organismosAcreditadores*/
        templateUrl: 'views/organismosAcreditadores.html',
        resolve: { onLoad: scrollTop }
      })
      .when('/numeralia',{
        templateUrl: 'views/numeralia.html',
        resolve: { onLoad: scrollTop }
      })
      .when('/series-estadisticas',{
        templateUrl: 'views/series-estadisticas.html',
        resolve: { onLoad: scrollTop }
      })
      .when('/sieues',{
        templateUrl: 'views/sieues.html',
        resolve: { onLoad: scrollTop }
      })
      .otherwise({
        redirectTo: '/'
      });
      function scrollTop () {
        $(document).ready(function () {
            $(window).scrollTop(0);
        });
      }
  });
